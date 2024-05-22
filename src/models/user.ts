import { Gender, SleepData } from "@prisma/client";

export interface UserWithSleepData {
  id: number;
  name: string;
  gender: Gender;
  sleepData: SleepData[];
}
