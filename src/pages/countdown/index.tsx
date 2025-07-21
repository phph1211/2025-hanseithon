import React, { useEffect, useState } from "react";

import { PageLayout } from "src/components/layouts";

import * as S from "./styled";

export default function CountDownPage() {
  const calculateTimeLeft = () => {
    const now = new Date();

    const target = new Date();
    target.setHours(14, 0, 0, 0);

    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }

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
    return `${h}:${m}:${s}`;
  };

  return (
    <PageLayout title={""} description={""}>
      <S.CountDownContainer>
        <S.CountText>
          {formatTime(timeLeft)
            .split(":")
            .map((part, idx, arr) => (
              <React.Fragment key={idx}>
                <span className="number">{part}</span>
                {idx < arr.length - 1 && <span className="colon">:</span>}
              </React.Fragment>
            ))}
        </S.CountText>
      </S.CountDownContainer>
    </PageLayout>
  );
}
