import { ActivityDAO as Activity } from "../lib/types/new-activity-dao";
import { formatDuration, formatTime } from "../lib/utils/time";

interface ActivityListProps {
  activities: Activity[];
}

export default function ActivityList({ activities }: ActivityListProps) {
  if (activities.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No activities recorded yet today
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div
          key={activity.id}
          className="flex items-center justify-between p-4 rounded-lg border"
        >
          <div className="flex-1">
            <p className="font-medium capitalize">{activity.dimension}</p>
            <p className="text-sm text-muted-foreground">
              {formatTime(activity.startTime)} - {formatTime(activity.endTime)} (
              {formatDuration(activity.duration)})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}