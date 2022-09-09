/*
  Warnings:

  - Changed the type of `date` on the `News` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "News" DROP CONSTRAINT "News_createdBy_fkey";

-- AlterTable
ALTER TABLE "News" DROP COLUMN "date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
