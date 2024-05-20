/*
  Warnings:

  - You are about to drop the column `sleepDuration` on the `SleepData` table. All the data in the column will be lost.
  - Added the required column `sleepDurationHrs` to the `SleepData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SleepData" DROP COLUMN "sleepDuration",
ADD COLUMN     "sleepDurationHrs" INTEGER NOT NULL;
