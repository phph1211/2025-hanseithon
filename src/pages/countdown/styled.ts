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
`;

export const CountText = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 10vw;

  @media (min-width: 768px) {
    font-size: 8vw;
  }

  @media (min-width: 1024px) {
    font-size: 8vw;
  }

  .number,
  .colon {
    display: inline-block;
    width: 1.2ch;
    text-align: center;
  }

  .number {
    margin: 2rem;
  }

  .colon {
    margin: 2rem;
  }
`;
