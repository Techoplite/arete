import { alignMonthStart } from "@/utils/alignMonthStart";
import CalendarDay from "./CalendarDay";
import { DayInMonth } from "@/app/interfaces/DayInMonth";

export default function CalendarDays({
  days,
  daysNames,
}:  {
  days: DayInMonth[];
  daysNames: string[];
}) {
  return (
    <ul className="grid grid-cols-7">
      {alignMonthStart(days, daysNames)}
      {days.map((day) => (
        <CalendarDay key={day.number} day={day} />
      ))}
    </ul>
  );
}