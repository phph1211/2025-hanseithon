import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function CountDownPage() {
  const getSecondsUntilTarget = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(22, 0, 0, 0); // 매일 오후 2시

    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }

    return Math.floor((target.getTime() - now.getTime()) / 1000);
  };

  const [remainingTime, setRemainingTime] = useState(getSecondsUntilTarget());

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
      {/* Hours */}
      <CountdownCircleTimer
        key={hours}
        isPlaying
        duration={24}
        initialRemainingTime={hours}
        colors="#004777"
        size={100}
        strokeWidth={8}
      >
        {() => <div>{String(hours).padStart(2, "0")}h</div>}
      </CountdownCircleTimer>

      {/* Minutes */}
      <CountdownCircleTimer
        key={minutes}
        isPlaying
        duration={60}
        initialRemainingTime={minutes}
        colors="#F7B801"
        size={100}
        strokeWidth={8}
      >
        {() => <div>{String(minutes).padStart(2, "0")}m</div>}
      </CountdownCircleTimer>

      {/* Seconds */}
      <CountdownCircleTimer
        key={seconds}
        isPlaying
        duration={60}
        initialRemainingTime={seconds}
        colors="#A30000"
        size={100}
        strokeWidth={8}
      >
        {() => <div>{String(seconds).padStart(2, "0")}s</div>}
      </CountdownCircleTimer>
    </div>
  );
}
