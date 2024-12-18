"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { ACTIVITY_DIMENSIONS } from "../lib/constants/activity-dimensions";
import { type NewActivityDAO as NewActivity } from "../lib/types/new-activity-dao";

interface ActivityFormProps {
  onSubmit: (activity: NewActivity) => void;
}

export default function ActivityForm({ onSubmit }: ActivityFormProps) {
  const [newActivity, setNewActivity] = useState<NewActivity>({
    dimension: "",
    startTime: "",
    endTime: "",
  });

  const handleSubmit = () => {
    if (!newActivity.dimension || !newActivity.startTime || !newActivity.endTime) {
      return;
    }

    onSubmit(newActivity);
    setNewActivity({
      dimension: "",
      startTime: "",
      endTime: "",
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-4">
      <div>
        <Label htmlFor="dimension">Activity Type</Label>
        <Select
          value={newActivity.dimension}
          onValueChange={(value) =>
            setNewActivity({ ...newActivity, dimension: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select activity" />
          </SelectTrigger>
          <SelectContent>
            {ACTIVITY_DIMENSIONS.map((dim) => (
              <SelectItem key={dim} value={dim.toLowerCase()}>
                {dim}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="startTime">Start Time</Label>
        <Input
          type="time"
          value={newActivity.startTime}
          onChange={(e) =>
            setNewActivity({ ...newActivity, startTime: e.target.value })
          }
        />
      </div>

      <div>
        <Label htmlFor="endTime">End Time</Label>
        <Input
          type="time"
          value={newActivity.endTime}
          onChange={(e) =>
            setNewActivity({ ...newActivity, endTime: e.target.value })
          }
        />
      </div>

      <div className="flex items-end">
        <Button
          onClick={handleSubmit}
          className="w-full"
          variant="default"
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Activity
        </Button>
      </div>
    </div>
  );
}