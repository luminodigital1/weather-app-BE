export function formatDateTime(currentTime: Date, timeZone: string): string {
  return currentTime.toLocaleString('en-US', {
    timeZone: timeZone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}


export const cityTimeZones: Record<string, string> = {
  "New York": 'America/New_York',
  "Los Angeles": 'America/Los_Angeles',
  "Chicago": 'America/Chicago',
  "Houston": 'America/Chicago',
  "Phoenix": 'America/Phoenix',
  "London": 'Europe/London',
  "Berlin": 'Europe/Berlin',
  "Paris": 'Europe/Paris',
  "Tokyo": 'Asia/Tokyo',
  "Beijing": 'Asia/Shanghai',
  "Sydney": 'Australia/Sydney',
  "Toronto": 'America/Toronto',
  "Moscow": 'Europe/Moscow',
  "Rio de Janeiro": 'America/Sao_Paulo',
  "Cape Town": 'Africa/Johannesburg',
  "Mumbai": 'Asia/Kolkata',
  "Dubai": 'Asia/Dubai',
  "Bangkok": 'Asia/Bangkok',
  "Singapore": 'Asia/Singapore',
  "Istanbul": 'Europe/Istanbul',
  "Lahore": 'Asia/Karachi',
  "Islamabad": 'Asia/Karachi',
};
