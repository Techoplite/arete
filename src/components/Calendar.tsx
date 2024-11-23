"use client";

import { useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";
import getDaysOfTheWeekNames from "@/utils/getDaysOfTheWeekNames";
import { DayInMonth } from "@/app/interfaces/DayInMonth";
import { alignMonthStart } from "@/utils/alignMonthStart";
import CalendarDay from "./CalendarDay";

export default function Calendar() {
  const [days, setDays] = useState<DayInMonth[]>([]);

  const [daysNames, setDaysNames] = useState<string[]>([]);

  useEffect(() => {
    const daysInMonth = getDaysInCurrentMonth();
    setDays(daysInMonth);
    const weekDaysNames = getDaysOfTheWeekNames(true);
    setDaysNames(weekDaysNames);
  }, []);

  return (
    <>
      <div className="grid grid-cols-7 text-center mt-2.5">
        {daysNames.map((dayName) => (
          <div key={dayName}>{dayName}</div>
        ))}
      </div>
      <ul className="grid grid-cols-7">
        {alignMonthStart(days, daysNames)}
        {days.map((day) => (
          <CalendarDay key={day.number} day={day}/>
        ))}
      </ul>
    </>
  );
}
