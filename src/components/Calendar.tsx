"use client";

import { useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";
import getDaysOfTheWeekNames from "@/utils/getDaysOfTheWeekNames";
import { DayInMonth } from "@/app/interfaces/DayInMonth";
import CalendarDaysNames from "./CalendarDaysNames";
import CalendarDays from "./CalendarDays";
import CalendarControls from "./CalendarControls";

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
      <CalendarControls />
      <CalendarDaysNames daysNames={daysNames} />
      <CalendarDays daysNames={daysNames} days={days} />
    </>
  );
}
