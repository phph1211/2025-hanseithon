import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { PageLayout } from "src/components/layouts";

import * as S from "./styled";

export default function CountDownPage() {
  const getSecondsUntilTarget = () => {
    const now = new Date();
    const target = new Date();
    target.setHours(14, 0, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);
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
    <PageLayout title={""} description={""}>
      <S.CountDownContainer>
        <CountdownCircleTimer
          key={hours}
          isPlaying
          duration={86400} // 24h
          initialRemainingTime={remainingTime}
          colors="#CCCCCC"
          size={300}
          strokeWidth={16}
        >
          {() => (
            <S.CountTextWrapper>
              <S.CountText>{String(hours).padStart(2, "0")}</S.CountText>
              <S.CountText>Hours</S.CountText>
            </S.CountTextWrapper>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          key={minutes}
          isPlaying
          duration={3600}
          initialRemainingTime={remainingTime % 3600}
          colors="#888888"
          size={300}
          strokeWidth={16}
        >
          {() => (
            <S.CountTextWrapper>
              <S.CountText>{String(minutes).padStart(2, "0")}</S.CountText>
              <S.CountText>Minutes</S.CountText>
            </S.CountTextWrapper>
          )}
        </CountdownCircleTimer>
        <CountdownCircleTimer
          key={seconds}
          isPlaying
          duration={60}
          initialRemainingTime={remainingTime % 60}
          colors="#444444"
          size={300}
          strokeWidth={16}
        >
          {() => (
            <S.CountTextWrapper>
              <S.CountText>{String(seconds).padStart(2, "0")}</S.CountText>
              <S.CountText>Seconds</S.CountText>
            </S.CountTextWrapper>
          )}
        </CountdownCircleTimer>
      </S.CountDownContainer>
    </PageLayout>
  );
}
