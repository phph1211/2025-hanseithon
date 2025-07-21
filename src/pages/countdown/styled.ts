import styled from "@emotion/styled";

export const TimersWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const CountDownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  padding: 1rem;
  gap: 3rem;
`;

export const CountText = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 6vw;

  @media (min-width: 768px) {
    font-size: 5vw;
  }

  @media (min-width: 1024px) {
    font-size: 5vw;
  }
`;

export const CountTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
