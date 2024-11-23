import { DayInMonth } from "@/app/interfaces/DayInMonth";

export const alignMonthStart = (days: DayInMonth[], daysNames: string[]) => {
  if (!days.length || !daysNames.length) return []; // Return empty if data is not ready

  const firstDayName = days[0]?.name;
  const indexOfDayName = daysNames.findIndex((item) => firstDayName === item);

  // If the first day is invalid or cannot be found, return an empty array
  if (indexOfDayName === -1) return [];

  const spaces = [];
  for (let i = 0; i < indexOfDayName; i++) {
    spaces.push(<div key={`space-${i}`} />);
  }

  return spaces;
};
