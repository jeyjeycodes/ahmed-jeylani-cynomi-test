import { clsx, type ClassValue } from "clsx";
import { isAfter, startOfDay, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Check if a date is within the last 7 days.
 * @param date - The date to check.
 * @returns True if the date is within the last 7 days, false otherwise.
 */
export const isDateWithinLast7Days = (date: Date): boolean => {
  const today = startOfDay(new Date());
  const sevenDaysAgo = subDays(today, 7);

  return isAfter(date, sevenDaysAgo);
};
