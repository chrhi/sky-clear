/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModernAreaChart } from "../../components/engagement-chart";

const engagementData = [
  { name: "Jan", followers: 1200, likes: 3500, comments: 450, shares: 210 },
  { name: "Feb", followers: 1350, likes: 4200, comments: 580, shares: 310 },
  { name: "Mar", followers: 1500, likes: 4800, comments: 650, shares: 420 },
  { name: "Apr", followers: 1650, likes: 5200, comments: 720, shares: 500 },
];

const InstagramEngagementDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("likes");

  const chartColors = {
    likes: { primary: "#e11d48", secondary: "#fda4af" },
    followers: { primary: "#be123c", secondary: "#fecdd3" },
    comments: { primary: "#9f1239", secondary: "#fda4af" },
    shares: { primary: "#881337", secondary: "#fecdd3" },
  };

  return (
    <div className="space-y-6 ">
      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Followers",
            value: "1,650",
            icon: Users,
            color: "text-rose-500",
            increase: "+15%",
          },
          {
            title: "Total Likes",
            value: "5,200",
            icon: Heart,
            color: "text-rose-600",
            increase: "+12%",
          },
          {
            title: "Total Comments",
            value: "720",
            icon: MessageCircle,
            color: "text-rose-700",
            increase: "+18%",
          },
          {
            title: "Total Shares",
            value: "500",
            icon: Share2,
            color: "text-rose-800",
            increase: "+22%",
          },
        ].map(({ title, value, icon: Icon, color, increase }) => (
          <Card
            key={title}
            className="hover:shadow-lg transition-shadow duration-300 bg-white"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <Icon className={cn("h-4 w-4", color)} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rose-900">{value}</div>
              <p className={cn("text-xs font-semibold", color)}>
                {increase} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Engagement Trends */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-rose-900">Engagement Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            defaultValue="likes"
            className="  "
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className=" w-fit bg-rose-100 px-2 mb-4">
              <div className="w-fit h-fit grid    grid-cols-4 bg-rose-100 ">
                {[
                  { value: "likes", label: "Likes" },
                  { value: "followers", label: "Followers" },
                  { value: "comments", label: "Comments" },
                  { value: "shares", label: "Shares" },
                ].map(({ value, label }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="data-[state=active]:bg-rose-500 data-[state=active]:text-white"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </div>
            </TabsList>

            {[
              { value: "likes", dataKey: "likes" },
              { value: "followers", dataKey: "followers" },
              { value: "comments", dataKey: "comments" },
              { value: "shares", dataKey: "shares" },
            ].map(({ value, dataKey }) => (
              <TabsContent key={value} value={value}>
                <ModernAreaChart
                  //@ts-expect-error i don't know what there is
                  data={engagementData.map((item) => ({
                    name: item.name,
                    value: item[dataKey as keyof typeof item],
                  }))}
                  primaryColor={
                    chartColors[value as keyof typeof chartColors].primary
                  }
                  secondaryColor={
                    chartColors[value as keyof typeof chartColors].secondary
                  }
                />
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstagramEngagementDashboard;
