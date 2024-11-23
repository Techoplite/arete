"use client";

import { useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";
import getDaysOfTheWeekNames from "@/utils/getDaysOfTheWeekNames";
import { DayInMonth } from "@/app/interfaces/DayInMonth";
import CalendarDaysNames from "./CalendarDaysNames";
import CalendarDays from "./CalendarDays";
import getCurrentMonth from "@/utils/getCurrentMonth";
import getCurrentYear from "@/utils/getCurrentYear";

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
      <div className="flex flex-row justify-center align-center">
        <button className="px-4 py-2 bg-dark">
          <svg
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.82 21.18L5.66 12L14.82 2.82L12 0L0 12L12 24L14.82 21.18Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="text-2xl self-center w-full text-center">
          {getCurrentMonth()} {getCurrentYear()}
        </div>
        <button className="px-4 py-2 bg-dark">
          <svg
            width="15"
            height="24"
            viewBox="0 0 15 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.179932 21.18L9.33993 12L0.179932 2.82L2.99993 0L14.9999 12L2.99993 24L0.179932 21.18Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <CalendarDaysNames daysNames={daysNames} />
      <CalendarDays daysNames={daysNames} days={days} />
    </>
  );
}
