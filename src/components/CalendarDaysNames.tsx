export default function CalendarDaysNames({
  daysNames,
}: {
  daysNames: string[];
}) {
  return (
    <div className="grid grid-cols-7 text-center mt-2.5">
      {daysNames.map((dayName) => (
        <div key={dayName}>{dayName}</div>
      ))}
    </div>
  );
}
