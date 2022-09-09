-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "headline" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "News" ADD CONSTRAINT "News_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
