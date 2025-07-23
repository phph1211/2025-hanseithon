import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const pulse = keyframes`
  0% {
    opacity: 0;
  }
    
  100% {
    opacity: 0.5;
  }
`;

export const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  margin-top: -9rem;
  display: flex;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 767px) {
    background: conic-gradient(
      from 180deg at 50% 50%,
      #3f86cb 0deg,
      #6da4da 71.25deg,
      #cae5fb 172.5deg,
      #82bff5 249.37deg,
      #3f86cb 360deg
    );
  } */
`;

export const MainSectionLayer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  img {
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    object-fit: cover;
    z-index: -2;
  }
`;

export const MainSectionImg = styled.img``;

export const MainSectionContentContainer = styled.div`
  position: absolute;
  top: 44.5%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainSectionTitle = styled(motion.h1)`
  font-size: 12rem;
  font-weight: 900;
  text-align: center;
  user-select: none;
  letter-spacing: 3.8rem;

  @media screen and (max-width: 991px) {
    font-size: 7.2rem;
    letter-spacing: 2.28rem;
  }

  @media screen and (max-width: 767px) {
    font-size: 3.9rem;
    letter-spacing: 1.2rem;
  }
`;

export const OperationPeriod = styled(motion.p)`
  font-size: 3.2rem;
  font-weight: 200;
  text-align: center;

  margin-bottom: 5.8rem;
  letter-spacing: 1rem;

  @media screen and (max-width: 767px) {
    font-size: 2.4rem;
    letter-spacing: 0.4rem;
    margin-bottom: 4.35rem;
  }
`;

export const ApplicationPeriod = styled(motion.p)`
  font-size: 2.8rem;
  font-weight: 500;
  text-align: center;

  margin-top: 5.6rem;
  letter-spacing: 0.01rem;

  @media screen and (max-width: 767px) {
    font-size: 2rem;
    margin-top: 4rem;
  }
`;

export const GradientCircle = styled(motion.div)<{ size: string; degree: number }>`
  position: absolute;

  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  user-select: none;

  background: ${(props) =>
    `linear-gradient(${props.degree}deg, #5871b2 0%, #458bcd 50%, #cfe6fc 100%);`};
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.05);
`;

export const CountText = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 10vw;

  .time-part {
    display: flex;
    align-items: baseline;
    white-space: nowrap;
    font-feature-settings: "tnum";
  }

  .colon {
    margin: 0 1.8vw;
  }

  @media screen and (max-width: 767px) {
    font-size: 12vw;

    .colon {
      margin: 0 2.5vw;
    }
  }
`;

export const TimeLabel = styled.p`
  color: white;
  font-size: 5rem;
  font-weight: 200;
  text-align: center;
  margin-bottom: 1.2rem;

  @media screen and (max-width: 767px) {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
`;
