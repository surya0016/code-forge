/*
  Warnings:

  - You are about to drop the column `userId` on the `Discussion` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Solution` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserProgress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Discussion" DROP CONSTRAINT "Discussion_userId_fkey";

-- DropForeignKey
ALTER TABLE "Solution" DROP CONSTRAINT "Solution_userId_fkey";

-- DropForeignKey
ALTER TABLE "Submission" DROP CONSTRAINT "Submission_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_problemId_fkey";

-- DropForeignKey
ALTER TABLE "UserProgress" DROP CONSTRAINT "UserProgress_userId_fkey";

-- AlterTable
ALTER TABLE "Discussion" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Problem" ADD COLUMN     "wrappedCode" TEXT,
ALTER COLUMN "starterCode" SET DEFAULT '//Start your code here';

-- AlterTable
ALTER TABLE "Solution" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "userId";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserProgress";

-- DropEnum
DROP TYPE "ProgressStatus";
