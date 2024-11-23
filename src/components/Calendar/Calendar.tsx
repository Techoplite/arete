"use client";

import { useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";
import getDaysOfTheWeekNames from "@/utils/getDaysOfTheWeekNames";
import { DayInMonth } from "@/app/interfaces/DayInMonth";

export default function Calendar() {
  const [days, setDays] = useState<
   DayInMonth[]
  >([]);

  const [daysNames, setDaysNames] = useState<string[]>([]);

  useEffect(() => {
    // Fetch the days in the current month when the component mounts
    const daysInMonth = getDaysInCurrentMonth();
    setDays(daysInMonth);
    const weekDaysNames = getDaysOfTheWeekNames(true);
    setDaysNames(weekDaysNames);
  }, []);

  const alignMonthStart = () => {
    if (!days.length || !daysNames.length) return []; // Return empty if data is not ready

    const firstDayName = days[0]?.name;
    const indexOfDayName = daysNames.findIndex((item) => firstDayName === item);

    // If the first day is invalid or cannot be found, return an empty array
    if (indexOfDayName === -1) return [];

    const spaces = [];
    for (let i = 0; i < indexOfDayName; i++) {
      spaces.push(<div key={`space-${i}`} />);
    }

    return spaces;
  };

  return (
    <>
      <div className="grid grid-cols-7 text-center mt-2.5">
        {daysNames.map((dayName) => (
          <div key={dayName}>{dayName}</div>
        ))}
      </div>
      <ul className="grid grid-cols-7">
        {alignMonthStart()}

        {days.map((day) => (
          <li key={day.number} className="flex flex-col my-2">
            <div className="self-center">{day.number}</div>
            <div className="rounded-full h-2 w-2 bg-red-500 self-center mt-2.5" />
            <div className="rounded-full h-2 w-2 bg-green-500 self-center mt-2.5" />
          </li>
        ))}
      </ul>
    </>
  );
}
