import { alignMonthStart } from "@/utils/alignMonthStart";
import CalendarDay from "./CalendarDay";
import { DayInMonth } from "@/app/interfaces/DayInMonth";

export default function CalendarDays({
  days,
  daysNames,
  month,
  year,
}: {
  days: DayInMonth[];
  daysNames: string[];
  month: string
  year: string;
}) {
  return (
    <ul className="grid grid-cols-7">
      {alignMonthStart(days, daysNames)}
      {days.map((day) => (
        <CalendarDay key={day.number} day={day} month={month} year={year} />
      ))}
    </ul>
  );
}
