"use client";

// import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Loader2, Target } from "lucide-react";
import { useGoals } from "../hooks/use-goals";

import { useState } from "react";

import { ACTIVITY_DIMENSIONS } from "../lib/constants/activity-dimensions";
import { NewGoalDAO as NewGoal } from "../lib/types/new-goal-dao";

export default function GoalsSection() {
  const { goals, isLoading, addGoal } = useGoals();
  // error,
  const [newGoal, setNewGoal] = useState<NewGoal>({
    dimension: "",
    targetMinutes: "",
    type: "MINIMUM",
  });

  const handleAddGoal = async () => {
    if (!newGoal.dimension || !newGoal.targetMinutes) return;

    try {
      await addGoal(newGoal);
      setNewGoal({
        dimension: "",
        targetMinutes: "",
        type: "MINIMUM",
      });
    } catch (err) {
      console.error("Failed to add goal:", err);
    }
  };

  // if (error) {
  //   return (
  //     <Alert variant="destructive">
  //       <AlertDescription>{error}</AlertDescription>
  //     </Alert>
  //   );
  // }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <Label htmlFor="dimension">Activity Type</Label>
          <Select
            value={newGoal.dimension}
            onValueChange={(value) =>
              setNewGoal({ ...newGoal, dimension: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select activity" />
            </SelectTrigger>
            <SelectContent>
              {ACTIVITY_DIMENSIONS.map((dim) => (
                <SelectItem key={dim} value={dim}>
                  {dim}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="targetMinutes">Target (minutes)</Label>
          <Input
            type="number"
            value={newGoal.targetMinutes}
            onChange={(e) =>
              setNewGoal({ ...newGoal, targetMinutes: e.target.value })
            }
            placeholder="e.g., 60"
          />
        </div>

        <div>
          <Label htmlFor="type">Goal Type</Label>
          <Select
            value={newGoal.type}
            onValueChange={(value: "MINIMUM" | "MAXIMUM") =>
              setNewGoal({ ...newGoal, type: value })
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="MINIMUM">Minimum</SelectItem>
              <SelectItem value="MAXIMUM">Maximum</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <Button onClick={handleAddGoal} className="w-full" variant="default">
            <Target className="mr-2 h-4 w-4" />
            Set Goal
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Current Goals</h3>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className="flex items-center justify-between p-4 rounded-lg border"
            >
              <div className="flex-1">
                <p className="font-medium capitalize">{goal.dimension}</p>
                <p className="text-sm text-muted-foreground">
                  {goal.type === "MINIMUM" ? "At least" : "At most"}{" "}
                  {goal.targetMinutes} minutes per day
                </p>
              </div>
              <Clock className="h-5 w-5 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}