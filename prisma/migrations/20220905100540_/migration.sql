/*
  Warnings:

  - Added the required column `class` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentName` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `section` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "class" INTEGER NOT NULL,
ADD COLUMN     "parentName" TEXT NOT NULL,
ADD COLUMN     "section" TEXT NOT NULL;
