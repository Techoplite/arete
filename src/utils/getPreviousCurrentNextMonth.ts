export default function getPreviousCurrentNextMonth(date: string): string[] {
  // Parse the input date string into a Date object
  const monthNames = [
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

  const [monthName, year] = date.split(" ");
  const monthIndex = monthNames.indexOf(monthName);
  const yearNum = parseInt(year, 10);

  // Create a Date object for the middle month
  const middleDate = new Date(yearNum, monthIndex);

  // Calculate the previous, current, and next months
  const previousMonth = new Date(middleDate);
  previousMonth.setMonth(middleDate.getMonth() - 1);

  const nextMonth = new Date(middleDate);
  nextMonth.setMonth(middleDate.getMonth() + 1);

  // Format the result as 'Month YYYY'
  const formatDate = (date: Date): string => {
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  // Return an array of previous, current, and next month
  return [
    formatDate(previousMonth),
    formatDate(middleDate),
    formatDate(nextMonth),
  ];
}
