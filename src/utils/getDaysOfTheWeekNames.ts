export default function getDaysOfTheWeekNames(short: boolean = false, locale: string = "en-GB"): string[] {
    const days = [];
    const baseDate = new Date(Date.UTC(2024, 0, 8)); // A known Monday (adjust if needed)
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(baseDate);
      day.setDate(baseDate.getDate() + i);
      days.push(day.toLocaleDateString(locale, { weekday: short ? "short" : "long" }));
    }
    
    return days;
  }
  
  