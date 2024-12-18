export type ActivityDimensionxx =
  | "meditation"
  | "think with paper"
  | "think without paper"
  | "social media perso"
  | "social media pro"
  | "coding"
  | "family"
  | "sleep"
  | "calls"
  | "direct conversations"
  | "biological needs"
  | "reading"
  | "learning"
  | "prayer"
  | "exercise"
  | "hobbies";

export const ACTIVITY_DIMENSIONS = [
  "Work",
  "Reading",
  "Exercise",
  "Social Media",
  "Learning",
  "Family",
] as const;

export type ActivityDimension = typeof ACTIVITY_DIMENSIONS[number];
