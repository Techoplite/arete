import { DayInMonth } from "@/app/interfaces/DayInMonth";

export default function CalendarDay({ day }: { day: DayInMonth }) {
  return (
    <li key={day.number} className="flex flex-col my-2">
      <div className="self-center">{day.number}</div>
      <div className="rounded-full h-2 w-2 bg-red-500 self-center mt-2.5" />
      <div className="rounded-full h-2 w-2 bg-green-500 self-center mt-2.5" />
    </li>
  );
}
