import { ActivityDAO as Activity } from '../types/new-activity-dao';
import { GoalDAO as Goal } from '../types/new-goal-dao';
import { type DailyStats, type WeeklyStats } from '../types/stats';

export function calculateDailyStats(
  activities: Activity[],
  goals: Goal[]
): DailyStats[] {
  const statsByDimension = new Map<string, DailyStats>();

  // Initialiser les stats avec les objectifs
  goals.forEach((goal) => {
    statsByDimension.set(goal.dimension, {
      dimension: goal.dimension,
      actual: 0,
      target: goal.targetMinutes,
      percentage: 0,
      status: 'warning',
    });
  });

  // Calculer le temps total par dimension
  activities.forEach((activity) => {
    const current = statsByDimension.get(activity.dimension) || {
      dimension: activity.dimension,
      actual: 0,
      target: 0,
      percentage: 0,
      status: 'warning',
    };

    current.actual += activity.duration;
    statsByDimension.set(activity.dimension, current);
  });

  // Calculer les pourcentages et statuts
  return Array.from(statsByDimension.values()).map((stat) => {
    const goal = goals.find((g) => g.dimension === stat.dimension);
    if (!goal) return stat;

    const percentage = (stat.actual / stat.target) * 100;
    let status: 'success' | 'warning' | 'danger' = 'warning';

    if (goal.type === 'MINIMUM') {
      status = percentage >= 100 ? 'success' : percentage >= 80 ? 'warning' : 'danger';
    } else {
      status = percentage <= 100 ? 'success' : percentage <= 120 ? 'warning' : 'danger';
    }

    return {
      ...stat,
      percentage,
      status,
    };
  });
}

export function calculateWeeklyStats(
  dailyStats: DailyStats[],
  previousWeekStats?: WeeklyStats
): WeeklyStats {
  const successfulDimensions = dailyStats.filter((stat) => stat.status === 'success');
  const overallScore = (successfulDimensions.length / dailyStats.length) * 100;

  // Trouver la meilleure réussite
  const bestAchievement = successfulDimensions.length > 0
    ? {
      dimension: successfulDimensions[0].dimension,
      streak: 1, // À améliorer avec un vrai suivi des streaks
    }
    : undefined;

  // Trouver l'axe d'amélioration
  const improvement = dailyStats
    .filter((stat) => stat.status === 'danger')
    .map((stat) => ({
      dimension: stat.dimension,
      difference: Math.abs(stat.actual - stat.target),
    }))
    .sort((a, b) => b.difference - a.difference)[0];

  // Générer les badges
  const badges = generateBadges(dailyStats, previousWeekStats);

  return {
    dailyStats,
    overallScore,
    bestAchievement,
    improvement,
    badges,
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateBadges(dailyStats: DailyStats[], previousWeekStats?: WeeklyStats) {
  const badges = [];

  // Badge pour première journée complétée
  if (dailyStats.some((stat) => stat.status === 'success')) {
    badges.push({
      id: 'first-success',
      title: 'First Success',
      description: 'Completed your first daily goal!',
      type: "milestone" as "milestone" | "streak" | "achievement",
      icon: 'trophy',
      earnedAt: new Date(),
    });
  }

  // Badge pour 100% des objectifs atteints
  if (dailyStats.every((stat) => stat.status === 'success')) {
    badges.push({
      id: 'perfect-day',
      title: 'Perfect Day',
      description: 'Achieved all your daily goals!',
      type: "achievement" as "milestone" | "streak" | "achievement",
      icon: 'star',
      earnedAt: new Date(),
    });
  }

  return badges;
}