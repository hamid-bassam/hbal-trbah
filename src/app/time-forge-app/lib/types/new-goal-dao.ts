import { type ActivityDimension } from '../constants/activity-dimensions';

export type GoalType = 'MINIMUM' | 'MAXIMUM';

export interface GoalDAO {
  id: string;
  dimension: ActivityDimension;
  targetMinutes: number;
  type: GoalType;
  active: boolean;
}

export interface NewGoalDAO {
  dimension: string;
  targetMinutes: string | number;
  type: GoalType;
}