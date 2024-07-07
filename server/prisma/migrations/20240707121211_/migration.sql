/*
  Warnings:

  - You are about to drop the column `action` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `event_id` on the `Event` table. All the data in the column will be lost.
  - Added the required column `action_id` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `action_name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Event_event_id_key";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "action",
DROP COLUMN "event_id",
ADD COLUMN     "action_id" TEXT NOT NULL,
ADD COLUMN     "action_name" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "target_id" DROP NOT NULL,
ALTER COLUMN "target_name" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL;
DROP SEQUENCE "Event_id_seq";
