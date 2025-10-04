export default function getToday(): {
  dayNumber: string;
  monthNumber: string;
  year: string;
} {
  const today = new Date();
  return {
    dayNumber: today.getDate().toString(),
    monthNumber: (today.getMonth() + 1).toString(), // Months are zero-based in JavaScript
    year: today.getFullYear().toString(),
  };
}
