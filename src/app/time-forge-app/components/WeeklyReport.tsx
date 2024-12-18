"use client";

// import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Trophy } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
// import { useWeeklyStats } from "../hooks/use-weekly-stats";
const weeklyStatsMock = {
  dailyStats: [
    { dimension: "Coding", actual: 180, target: 120, status: "success" },
    { dimension: "Social Media", actual: 60, target: 45, status: "warning" },
    { dimension: "Exercise", actual: 90, target: 60, status: "success" },
    { dimension: "Reading", actual: 30, target: 60, status: "danger" },
    { dimension: "Meditation", actual: 15, target: 30, status: "danger" },
    { dimension: "Thinking paper", actual: 180, target: 120, status: "success" },
    { dimension: "thinking without for the test tes tes s dqs d", actual: 60, target: 45, status: "warning" },
    { dimension: "sport", actual: 90, target: 60, status: "success" },
    { dimension: "prayer", actual: 30, target: 60, status: "danger" },
    { dimension: "sleep", actual: 15, target: 30, status: "danger" },
  ],
  overallScore: 70,
  bestAchievement: {
    dimension: "Coding",
    streak: 4,
  },
  improvement: {
    dimension: "Reading",
    difference: 30,
  },
  badges: [
    {
      id: "first-success",
      title: "First Success",
      description: "Completed your first daily goal!",
      type: "milestone",
      icon: "trophy",
    },
    {
      id: "perfect-day",
      title: "Perfect Day",
      description: "Achieved all your daily goals!",
      type: "achievement",
      icon: "star",
    },
  ],
};

// function calculateChartHeight(data: { dimension: string }[]) {
//   const maxLength = Math.max(...data.map((item) => item.dimension.length));
//   return Math.min(400 + maxLength * 5, 600); // Ajuste le facteur (5 ici) pour affiner
// }

function calculateBottomMargin(data: { dimension: string }[]) {
  const maxLength = Math.max(...data.map((item) => item.dimension.length));
  return Math.min(50 + maxLength * 3, 150); // Ajuste les valeurs pour éviter des marges excessives
}

function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

export default function WeeklyReport() {
  // const { weeklyStats, isLoading, error } = useWeeklyStats();
  const weeklyStats = weeklyStatsMock; // Utilisation des données mockées
  const processedData = weeklyStatsMock.dailyStats.map((item) => ({
    ...item,
    shortDimension: truncateText(item.dimension, 25), // Tronque les dimensions
  }));


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

  // if (!weeklyStats) {
  //   return (
  //     <div className="text-center text-muted-foreground py-8">
  //       No data available for this week yet
  //     </div>
  //   );
  // }

  return (
    <div className="space-y-8" >
      <div>
        <h2 className="text-2xl font-bold mb-4">Weekly Activity Summary</h2>
        <div className=" w-full"
          style={{
            height: `${calculateBottomMargin(weeklyStats.dailyStats) + 400}px`,
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={processedData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: calculateBottomMargin(weeklyStats.dailyStats),
              }}


            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
              {/* Axe X stylisé */}
              <XAxis
                dataKey="shortDimension"
                tick={({ x, y, payload }) => (
                  <g transform={`translate(${x},${y})`}>
                    <title>{payload.value}</title>
                    <text
                      x={0}
                      y={0}
                      dy={16}
                      textAnchor="end"
                      fill="hsl(var(--muted-foreground))"
                      fontWeight={600}
                      transform="rotate(-45)"
                      fontSize="16px"
                    >
                      {payload.value}
                    </text>
                  </g>
                )}
                interval={0}
              />
              <YAxis
                tick={{ fill: "hsl(var(--muted-foreground))", fontWeight: "1000", fontSize: "25px" }}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                cursor={{ fill: "hsl(var(--accent-background))", opacity: 0.1 }}
                contentStyle={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  fontSize: "12px",
                }}
              />
              <Bar
                dataKey="actual"
                fill="hsl(var(--primary))"
                name="Actual Time"
                animationDuration={800}
                radius={[8, 8, 0, 0]}
              />
              <Bar
                dataKey="target"
                fill="hsl(var(--muted-foreground))"
                name="Target Time"
                animationDuration={1000}
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="p-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Overall Score</h3>
          </div>
          <div className="text-4xl font-bold text-primary mt-2">
            {Math.round(weeklyStats.overallScore)}%
          </div>
          <p className="text-sm text-muted-foreground mt-1">
            {weeklyStats.overallScore >= 80
              ? "Great progress this week!"
              : "Keep pushing forward!"}
          </p>
        </Card>

        {weeklyStats.bestAchievement && (
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <h3 className="font-semibold">Best Achievement</h3>
            </div>
            <div className="text-lg font-medium mt-2">
              {weeklyStats.bestAchievement.dimension}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {weeklyStats.bestAchievement.streak} days streak this week
            </p>
          </Card>
        )}

        {weeklyStats.improvement && (
          <Card className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-500" />
              <h3 className="font-semibold">Area for Improvement</h3>
            </div>
            <div className="text-lg font-medium mt-2">
              {weeklyStats.improvement.dimension}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {Math.round(weeklyStats.improvement.difference)} minutes off target
            </p>
          </Card>
        )}
      </div>

      {weeklyStats.badges.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Recent Achievements</h3>
          <div className="grid gap-4 md:grid-cols-4">
            {weeklyStats.badges.map((badge) => (
              <Card key={badge.id} className="p-4">
                <div className="flex items-center gap-2">
                  {badge.icon === 'trophy' ? (
                    <Trophy className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Star className="h-5 w-5 text-yellow-500" />
                  )}
                  <h4 className="font-semibold">{badge.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {badge.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )
      }
    </div >
  );
}