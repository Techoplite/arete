"use client";

import { MouseEventHandler, useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";
import getDaysOfTheWeekNames from "@/utils/getDaysOfTheWeekNames";
import { DayInMonth } from "@/app/interfaces/DayInMonth";
import CalendarDaysNames from "./CalendarDaysNames";
import CalendarDays from "./CalendarDays";
import { PREV, NEXT } from "@/app/constants";
import getCurrentMonth from "@/utils/getCurrentMonth";
import getCurrentYear from "@/utils/getCurrentYear";
import getPreviousCurrentNextMonth from "@/utils/getPreviousCurrentNextMonth";
import ButtonChevron from "./ButtonChevron";

export default function Calendar() {
  const currentMonth = getCurrentMonth();
  const currentYear = getCurrentYear();
  const date = `${currentMonth} ${currentYear}`;

  const [months, setMonths] = useState<string[]>(
    getPreviousCurrentNextMonth(date)
  );
  const [days, setDays] = useState<DayInMonth[]>([]);
  const [daysNames, setDaysNames] = useState<string[]>([]);
  
  const middlePosition = months[1];
  const leftPosition = months[0];
  const rightPosition = months[2];

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newLocal = (event.target as HTMLButtonElement).id === PREV;
    if (newLocal) setMonths(getPreviousCurrentNextMonth(leftPosition));
    if ((event.target as HTMLButtonElement).id === NEXT)
      setMonths(getPreviousCurrentNextMonth(rightPosition));
  };

  useEffect(() => {
    const daysInMonth = getDaysInCurrentMonth();
    setDays(daysInMonth);
    const weekDaysNames = getDaysOfTheWeekNames(true);
    setDaysNames(weekDaysNames);
  }, []);

  return (
    <>
      <div className="flex flex-row justify-center align-center">
        <ButtonChevron position={PREV} handleClick={handleClick} />
        <div className="w-full text-2xl text-center">{middlePosition}</div>
        <ButtonChevron position={NEXT} handleClick={handleClick} />
      </div>
      <CalendarDaysNames daysNames={daysNames} />
      <CalendarDays daysNames={daysNames} days={days} />
    </>
  );
}
