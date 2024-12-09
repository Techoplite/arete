export default function getMonthNumberByFullName(monthName: string) {
  // Define an array of full month names
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Find the index of the month name in the array
  const monthIndex = months.findIndex(
    (month) => month.toLowerCase() === monthName.toLowerCase()
  );

  // Return the month number (1-based) or -1 if the month name is invalid
  return monthIndex !== -1 ? monthIndex + 1 : -1;
}
