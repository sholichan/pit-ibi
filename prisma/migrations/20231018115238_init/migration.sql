/*
  Warnings:

  - You are about to drop the column `kota_id` on the `User` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "kota" TEXT,
    "whatsapp" TEXT,
    "institusi" TEXT,
    "nama_institusi" TEXT
);
INSERT INTO "new_User" ("email", "id", "institusi", "nama_institusi", "name", "whatsapp") SELECT "email", "id", "institusi", "nama_institusi", "name", "whatsapp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
