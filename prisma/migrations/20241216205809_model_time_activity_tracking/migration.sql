-- CreateEnum
CREATE TYPE "GoalType" AS ENUM ('MINIMUM', 'MAXIMUM');

-- CreateTable
CREATE TABLE "Activity" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TemporaryActivityDurationGoal" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "dimension" TEXT NOT NULL,
    "currentTarget" INTEGER NOT NULL,
    "type" "GoalType" NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TemporaryActivityDurationGoal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityDurationGoalHistory" (
    "id" TEXT NOT NULL,
    "goalId" TEXT NOT NULL,
    "previousTargetMinutes" INTEGER NOT NULL,
    "newTargetMinutes" INTEGER NOT NULL,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityDurationGoalHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Activity_userId_date_idx" ON "Activity"("userId", "date");

-- CreateIndex
CREATE INDEX "Activity_userId_dimension_idx" ON "Activity"("userId", "dimension");

-- CreateIndex
CREATE INDEX "TemporaryActivityDurationGoal_userId_dimension_idx" ON "TemporaryActivityDurationGoal"("userId", "dimension");

-- CreateIndex
CREATE INDEX "TemporaryActivityDurationGoal_userId_active_idx" ON "TemporaryActivityDurationGoal"("userId", "active");

-- CreateIndex
CREATE INDEX "ActivityDurationGoalHistory_goalId_changedAt_idx" ON "ActivityDurationGoalHistory"("goalId", "changedAt");

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TemporaryActivityDurationGoal" ADD CONSTRAINT "TemporaryActivityDurationGoal_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityDurationGoalHistory" ADD CONSTRAINT "ActivityDurationGoalHistory_goalId_fkey" FOREIGN KEY ("goalId") REFERENCES "TemporaryActivityDurationGoal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
