-- DropForeignKey
ALTER TABLE "Follower" DROP CONSTRAINT "Follower_followerId_fkey";

-- AddForeignKey
ALTER TABLE "Follower" ADD CONSTRAINT "Follower_followedId_fkey" FOREIGN KEY ("followedId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
