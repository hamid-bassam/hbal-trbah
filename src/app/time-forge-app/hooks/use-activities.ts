"use client";

import { useEffect, useState } from 'react';
import { ActivityDAO as Activity, NewActivityDAO as NewActivity } from '../lib/types/new-activity-dao';

export function useActivities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActivities = async (date?: string) => {
    try {
      setIsLoading(true);
      const queryParams = date ? `?date=${date}` : '';
      const response = await fetch(`/api/activities${queryParams}`);
      if (!response.ok) throw new Error('Failed to fetch activities');
      const data = await response.json();
      setActivities(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const addActivity = async (newActivity: NewActivity) => {
    try {
      const response = await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newActivity),
      });

      if (!response.ok) throw new Error('Failed to add activity');

      const addedActivity = await response.json();
      setActivities(prev => [...prev, addedActivity]);
      return addedActivity;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add activity');
      throw err;
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return {
    activities,
    isLoading,
    error,
    fetchActivities,
    addActivity,
  };
}