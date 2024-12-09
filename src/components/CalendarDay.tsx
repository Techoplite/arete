import { DayInMonth } from "@/app/interfaces/DayInMonth";
import getToday from "../../getToday";
import { useEffect, useState } from "react";

export default function CalendarDay({
  day,
  month,
  year,
}: {
  day: DayInMonth;
  month: string;
  year: string;
}) {
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const today = getToday();
    setIsToday(
      day.number.toString() === today.dayNumber &&
        month === today.monthNumber &&
        year === today.year
    );
  }, [day.number, month, year]);

  return (
    <li
      key={day.number}
      className={`flex flex-col py-2 ${isToday && "bg-dark"}`}
    >
      <div className="self-center text-xl">{day.number}</div>
      <div className="rounded-full h-2 w-2 bg-red-500 self-center my-2.5" />
      <div className="rounded-full h-2 w-2 bg-green-500 self-center" />
    </li>
  );
}
