import { DayOperatingHours } from '../types/salon';

/**
 * Checks if the salon is currently open based on user's current local day and time
 */
export function getSalonOpenStatus(operatingHours: DayOperatingHours[]): {
  isOpen: boolean;
  statusText: string;
  todayHours?: DayOperatingHours;
} {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const now = new Date();
  const currentDayName = daysOfWeek[now.getDay()];
  
  const todayConfig = operatingHours.find(
    (item) => item.day.toLowerCase() === currentDayName.toLowerCase()
  );

  if (!todayConfig || todayConfig.isClosed) {
    return {
      isOpen: false,
      statusText: 'Closed Today',
      todayHours: todayConfig
    };
  }

  // Parse time strings like "10:00 AM" into minutes since midnight
  const parseTimeToMinutes = (timeStr: string): number => {
    const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return 0;
    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const ampm = match[3].toUpperCase();

    if (ampm === 'PM' && hours < 12) hours += 12;
    if (ampm === 'AM' && hours === 12) hours = 0;

    return hours * 60 + minutes;
  };

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const openMinutes = parseTimeToMinutes(todayConfig.openTime);
  const closeMinutes = parseTimeToMinutes(todayConfig.closeTime);

  const isOpen = currentMinutes >= openMinutes && currentMinutes <= closeMinutes;

  return {
    isOpen,
    statusText: isOpen ? `Open Now (${todayConfig.openTime} - ${todayConfig.closeTime})` : `Closed Now (Opens at ${todayConfig.openTime})`,
    todayHours: todayConfig
  };
}
