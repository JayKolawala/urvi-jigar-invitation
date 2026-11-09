import { useState, useEffect } from 'react';

// Wedding Ceremony Target: Tuesday, 2 February 2027, 7:00 PM IST (Asia/Kolkata, UTC+5:30)
const DEFAULT_TARGET_DATE = "2027-02-02T19:00:00+05:30";

export function useCountdown(targetDateString = DEFAULT_TARGET_DATE) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDateString));

  function calculateTimeLeft(dateString) {
    const target = new Date(dateString).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      // Event day or passed (active during the 14-hour ceremony & reception)
      const eventDuration = 14 * 60 * 60 * 1000;
      if (Math.abs(difference) <= eventDuration) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isToday: true,
          isPassed: false,
        };
      }
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isToday: false,
        isPassed: true,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      isToday: false,
      isPassed: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateString));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateString]);

  return timeLeft;
}
