"use client";

import { useEffect, useState } from 'react';
import { GoalDAO as Goal, NewGoalDAO as NewGoal } from '../lib/types/new-goal-dao';

export function useGoals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGoals = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/goals');
      if (!response.ok) throw new Error('Failed to fetch goals');
      const data = await response.json();
      setGoals(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const addGoal = async (newGoal: NewGoal) => {
    try {
      const response = await fetch('/api/goals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGoal),
      });

      if (!response.ok) throw new Error('Failed to add goal');

      const addedGoal = await response.json();
      setGoals(prev => [...prev, addedGoal]);
      return addedGoal;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add goal');
      throw err;
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return {
    goals,
    isLoading,
    error,
    fetchGoals,
    addGoal,
  };
}