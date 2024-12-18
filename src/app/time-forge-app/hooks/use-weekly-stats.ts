"use client";

import { useState, useEffect } from 'react';
import { type WeeklyStats } from '../lib/types/stats';
import { calculateDailyStats, calculateWeeklyStats } from '../lib/utils/stats';
import { useActivities } from './use-activities';
import { useGoals } from './use-goals';

export function useWeeklyStats() {
  const [weeklyStats, setWeeklyStats] = useState<WeeklyStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { activities } = useActivities();
  const { goals } = useGoals();

  useEffect(() => {
    if (activities.length === 0 || goals.length === 0) {
      setIsLoading(false);
      return;
    }

    try {
      const dailyStats = calculateDailyStats(activities, goals);
      const stats = calculateWeeklyStats(dailyStats);
      setWeeklyStats(stats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to calculate stats');
    } finally {
      setIsLoading(false);
    }
  }, [activities, goals]);

  return {
    weeklyStats,
    isLoading,
    error,
  };
}