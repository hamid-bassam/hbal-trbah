/* eslint-disable react/no-unescaped-entities */
"use client";

import { useActivities } from "../hooks/use-activities";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";
// import { Alert, AlertDescription } from "@/components/ui/alert";
// import { Loader2 } from "lucide-react";

export default function DailyInput() {
  const { activities, addActivity } = useActivities();
  // isLoading, error

  // if (error) {
  //   return (
  //     <Alert variant="destructive">
  //       <AlertDescription>{error}</AlertDescription>
  //     </Alert>
  //   );
  // }

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center py-8">
  //       <Loader2 className="h-8 w-8 animate-spin" />
  //     </div>
  //   );
  // }

  return (
    <div className="space-y-6">
      <ActivityForm onSubmit={addActivity} />
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Today's Activities</h3>
        <ActivityList activities={activities} />
      </div>
    </div>
  );
}