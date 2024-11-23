"use client"

import { useEffect, useState } from "react";
import getDaysInCurrentMonth from "@/utils/getDaysInCurrentMonth";

export default function Calendar() {
  const [days, setDays] = useState<{ name: string; number: number; year: number }[]>([]);

  useEffect(() => {
    // Fetch the days in the current month when the component mounts
    const daysInMonth = getDaysInCurrentMonth();
    setDays(daysInMonth);
  }, []);

  return (
      <div>
        {days.map((day) => (
          <div key={day.number}>
            <span>{day.name}</span>
            <span>{day.number}</span>
          </div>
        ))}
      </div>
  );
}

