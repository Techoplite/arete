export default function getDaysInCurrentMonth(): { name: string; number: number; year: number }[] {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // 0-based index (0 = January, 11 = December)

    // Find the first and last day of the current month
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0); // 0 gets the last day of the previous month (the current month)

    // Array to hold the days of the month
    const daysInMonth = [];

    // Loop through each day of the month
    for (let date = firstDayOfMonth; date <= lastDayOfMonth; date.setDate(date.getDate() + 1)) {
        const dayName = date.toLocaleString('en-US', { weekday: 'short' }); // Get the day name (Mon, Tue, etc.)
        const dayNumber = date.getDate(); // Get the numeric day (1, 2, 3, ..., 31)
        
        // Push the day object to the array
        daysInMonth.push({
            name: dayName,
            number: dayNumber,
            year: currentYear
        });
    }

    return daysInMonth;
}

// Example usage:
const days = getDaysInCurrentMonth();
console.log(days);
