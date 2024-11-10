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
      <h2>Calendar for {new Date().getFullYear()}</h2>
      <div className="calendar-grid">
        {days.map((day) => (
          <div key={day.number} className="calendar-day">
            <span>{day.name}</span>
            <span>{day.number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
