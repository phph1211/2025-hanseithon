import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { PageLayout } from "src/components/layouts";

import * as S from "./styled";

// 명시적 타입
type CountdownCircleTimerProps = {
  KEY: [number, number, number];
  DURATION: [number, number, number];
  COLORS_TIME: [number, number, number, number, number][];
  TEXT: [string, string, string];
};

export default function CountDownPage() {
  const getSecondsUntilTarget = () => {
    const now = new Date();
    const target = new Date();

    target.setHours(22, 0, 0, 0);

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

  const hoursCountText = String(hours).padStart(2, "0");
  const minutesCountText = String(minutes).padStart(2, "0");
  const secondsCountText = String(seconds).padStart(2, "0");

  const COUNTDOWN_TIMER_CONSTANT_ARRAY: CountdownCircleTimerProps = {
    KEY: [hours, minutes, seconds],
    DURATION: [86400, 3600, 60],
    COLORS_TIME: [
      [86400, 64800, 43200, 21600, 0],
      [3600, 2700, 1800, 900, 0],
      [60, 45, 30, 15, 0],
    ],
    TEXT: [hoursCountText, minutesCountText, secondsCountText],
  };

  return (
    <PageLayout title={""} description={""}>
      <S.CountDownContainer>
        {COUNTDOWN_TIMER_CONSTANT_ARRAY.KEY.map((item, index) => (
          <CountdownCircleTimer
            key={item}
            isPlaying
            duration={COUNTDOWN_TIMER_CONSTANT_ARRAY.DURATION[index]} // 24h
            initialRemainingTime={remainingTime}
            colors={["#0E69F1", "#3A7BF4", "#6590F6", "#8FA5F8", "#BAD9FF"]}
            colorsTime={COUNTDOWN_TIMER_CONSTANT_ARRAY.COLORS_TIME[index]}
            size={300}
            strokeWidth={16}
          >
            {() => <S.CountText>{COUNTDOWN_TIMER_CONSTANT_ARRAY.TEXT[index]}</S.CountText>}
          </CountdownCircleTimer>
        ))}
      </S.CountDownContainer>
    </PageLayout>
  );
}
