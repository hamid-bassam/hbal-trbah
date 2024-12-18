export interface DailyStats {
  dimension: string;
  actual: number;
  target: number;
  percentage: number;
  status: 'success' | 'warning' | 'danger';
}

export interface WeeklyStats {
  dailyStats: DailyStats[];
  overallScore: number;
  bestAchievement?: {
    dimension: string;
    streak: number;
  };
  improvement?: {
    dimension: string;
    difference: number;
  };
  badges: Badge[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  type: 'streak' | 'achievement' | 'milestone';
  icon: string;
  earnedAt: Date;
}