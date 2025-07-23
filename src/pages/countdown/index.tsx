import React, { useState, useEffect } from "react";

import * as S from "./styled";

export default function CountDownPage() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const target = new Date();

    target.setDate(now.getDate() + 1);
    target.setHours(14, 0, 0, 0);

    const diffInSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);
    return diffInSeconds;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return [h, m, s];
  };

  const [h, m, s] = formatTime(timeLeft);

  return (
    <S.MainSection>
      <S.MainSectionContentContainer>
        <S.OperationPeriod
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />
        <S.ApplicationPeriod
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.3 }}
        />

        <S.TimeLabel>남은시간</S.TimeLabel>

        <S.CountText>
          <span className="time-part">{h}h</span>
          <span className="colon"> : </span>
          <span className="time-part">{m}m</span>
          <span className="colon"> : </span>
          <span className="time-part">{s}s</span>
        </S.CountText>
      </S.MainSectionContentContainer>

      <S.MainSectionLayer>
        <img src="/static/hanseithonMain.png" alt="" />
      </S.MainSectionLayer>
    </S.MainSection>
  );
}
