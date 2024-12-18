"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Clock, Target } from "lucide-react";
import DailyInput from "../components/DailyInput";
import GoalsSection from "../components/GoalsSection";
import WeeklyReport from "../components/WeeklyReport";


export default function DailyReporting() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Daily Activity Report</h1>

      <Tabs defaultValue="daily" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="daily" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Daily Input
          </TabsTrigger>
          <TabsTrigger value="goals" className="flex items-center gap-2">
            <Target className="h-4 w-4" />
            Goals
          </TabsTrigger>
          <TabsTrigger value="report" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Weekly Report
          </TabsTrigger>
        </TabsList>

        <TabsContent value="daily">
          <Card className="p-6">
            <DailyInput />
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card className="p-6">
            <GoalsSection />
          </Card>
        </TabsContent>

        <TabsContent value="report">
          <Card className="p-6">
            <WeeklyReport />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}