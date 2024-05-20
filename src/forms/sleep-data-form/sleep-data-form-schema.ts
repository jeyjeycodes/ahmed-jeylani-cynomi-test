import { Gender } from "@prisma/client";
import { z } from "zod";

export const sleepDataFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(255, { message: "It has to be less than 255 characters" }),
  gender: z.nativeEnum(Gender, { message: "Gender is required" }),
  sleepDuration: z
    .number()
    .min(1, { message: "Sleep duration is required" })
    .max(24, { message: "There are only 24 hours in a day" }),
});

export type sleepDataFields = z.infer<typeof sleepDataFormSchema>;
