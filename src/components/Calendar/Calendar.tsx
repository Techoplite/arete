"use client";

import { useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";

export default function Calendar() {
  const [days, setDays] = useState<
    { name: string; number: number; year: number }[]
  >([]);

  useEffect(() => {
    // Fetch the days in the current month when the component mounts
    const daysInMonth = getDaysInCurrentMonth();
    setDays(daysInMonth);
  }, []);

  return (
    <div className="grid grid-cols-7">
      {days.map((day) => (
        <div key={day.number} className='flex flex-col my-2'>
          <div className='self-center'>{day.number}</div>
          <div className='rounded-full h-2 w-2 bg-red-500 self-center mt-2.5'/>
          <div className='rounded-full h-2 w-2 bg-green-500 self-center mt-2.5'/>
        </div>
      ))}
    </div>
  );
}
