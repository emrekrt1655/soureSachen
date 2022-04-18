/*
  Warnings:

  - You are about to drop the `Following` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_followedId_fkey";

-- DropForeignKey
ALTER TABLE "Following" DROP CONSTRAINT "Following_followerId_fkey";

-- DropTable
DROP TABLE "Following";

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("userId") ON DELETE CASCADE ON UPDATE CASCADE;
