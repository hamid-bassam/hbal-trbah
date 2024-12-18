import { ActivityDimension } from "../constants/activity-dimensions";

export interface NewActivityDAO {
  dimension: string;
  startTime: string;
  endTime: string;
}

export interface ActivityDAO {
  id: string;
  dimension: ActivityDimension;
  startTime: string;
  endTime: string;
  duration: number;
  date: Date;
}