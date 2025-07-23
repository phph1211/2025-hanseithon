import dayjs, { Dayjs } from "dayjs";

interface ScheduleData {
  startAt: Dayjs;
  endAt: Dayjs;
  schedule: string;
}

export const THURSDAY_SCHEDULE_ARRAY: ScheduleData[] = [
  {
    startAt: dayjs("2025-07-23 13:30:00"),
    endAt: dayjs("2025-07-23 15:00:00"),
    schedule: "참가자 입장 및 등록",
  },
  {
    startAt: dayjs("2025-07-23 15:00:00"),
    endAt: dayjs("2025-07-23 15:30:00"),
    schedule: "키노트",
  },
  {
    startAt: dayjs("2025-07-23 15:30:00"),
    endAt: dayjs("2025-07-23 18:00:00"),
    schedule: "자율 개발",
  },
  {
    startAt: dayjs("2025-07-23 18:00:00"),
    endAt: dayjs("2025-07-23 19:00:00"),
    schedule: "저녁 식사",
  },
  {
    startAt: dayjs("2025-07-23 19:00:00"),
    endAt: dayjs("2025-07-23 19:30:00"),
    schedule: "이벤트 타임 및 멘토단 OT",
  },
  {
    startAt: dayjs("2025-07-23 19:30:00"),
    endAt: dayjs("2025-07-24 00:00:00"),
    schedule: "자율 개발 및 멘토링",
  },
];

export const FRIDAY_SCHEDULE_ARRAY: ScheduleData[] = [
  {
    startAt: dayjs("2025-07-24 00:00:00"),
    endAt: dayjs("2025-07-24 08:00:00"),
    schedule: "자율 개발",
  },
  {
    startAt: dayjs("2025-07-24 08:00:00"),
    endAt: dayjs("2025-07-24 09:00:00"),
    schedule: "아침 식사",
  },
  {
    startAt: dayjs("2025-07-24 09:00:00"),
    endAt: dayjs("2025-07-24 13:00:00"),
    schedule: "자율 개발 및 멘토링",
  },
  {
    startAt: dayjs("2025-07-24 13:00:00"),
    endAt: dayjs("2025-07-24 14:00:00"),
    schedule: "점심 식사 및 발표 준비",
  },
  {
    startAt: dayjs("2025-07-24 14:00:00"),
    endAt: dayjs("2025-07-24 15:30:00"),
    schedule: "발표 및 심사",
  },
  {
    startAt: dayjs("2025-07-24 15:30:00"),
    endAt: dayjs("2025-07-24 16:00:00"),
    schedule: "시상",
  },
];

export const DAY_DATE = [
  {
    date: dayjs("2025-07-23"),
    schedules: THURSDAY_SCHEDULE_ARRAY,
  },
  {
    date: dayjs("2025-07-24"),
    schedules: FRIDAY_SCHEDULE_ARRAY,
  },
];
