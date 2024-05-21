/*
  Warnings:

  - You are about to drop the column `gender` on the `SleepData` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `SleepData` table. All the data in the column will be lost.
  - Added the required column `userId` to the `SleepData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SleepData" DROP COLUMN "gender",
DROP COLUMN "name",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- AddForeignKey
ALTER TABLE "SleepData" ADD CONSTRAINT "SleepData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
