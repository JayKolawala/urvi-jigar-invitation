import { useState, useEffect } from 'react';

// Target: Saturday, 21 November 2026, 10:00 AM IST (Asia/Kolkata, UTC+5:30)
const TARGET_DATE_STRING = "2026-11-21T10:00:00+05:30";

export function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  function calculateTimeLeft() {
    const target = new Date(TARGET_DATE_STRING).getTime();
    const now = new Date().getTime();
    const difference = target - now;

    if (difference <= 0) {
      // Check if it's the day of the event (within 14 hours) or completely passed
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
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return timeLeft;
}
