"use client";

import { Area, AreaChart, XAxis, YAxis } from "recharts";
import { CreatorStatsHistory } from "@/types/api";
import { Platform } from "@/types/common";
import { SocialHandle } from "./SocialHandle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

type StatsChartProps = {
  data: CreatorStatsHistory["historyPoints"];
};

const chartConfig = {
  likes: {
    label: "Daily likes",
    color: "#5aa06e",
  },
  followers: {
    label: "Daily followers",
    color: "#56986a",
  },
} satisfies ChartConfig;

export function StatsChart({ data }: StatsChartProps) {
  const chartData = data.map((point) => ({
    date: new Date(point.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    likes: point.likesCount,
    followers: point.followersCount,
  }));

  // Calculate min and max values to determine Y-axis range
  const values = chartData.flatMap((point) => [point.likes, point.followers]);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  const yAxisMax = Math.ceil(maxValue / 5000000) * 5000000;
  const yAxisMin = Math.floor(minValue / 5000000) * 5000000;

  // Calculate ticks for 5m increments
  const ticks = [];
  for (let i = yAxisMin; i <= yAxisMax; i += 5000000) {
    ticks.push(i);
  }

  return (
    <Card className="bg-black/20 border-white/[0.1] p-4">
      <CardHeader className="pt-0 px-0">
        <CardTitle className="pl-6 text-white text-sm tracking-wide">
          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mainGreen-light"></div>
                <p>Daily likes</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-mainGreen-dark"></div>
                <p>Daily followers</p>
              </div>
            </div>

            <div className="flex items-center gap-2 font-light">
              <SocialHandle
                platform={Platform.TIKTOK}
                text="TikTok data only"
              />
            </div>
          </div>
        </CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <ChartContainer className="h-[400px] w-full" config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={{ stroke: "#333" }}
              tickMargin={8}
              stroke="#666"
              tick={{ fill: "#666" }}
              angle={-90}
              height={60}
              textAnchor="end"
            />
            <YAxis
              ticks={ticks}
              tickFormatter={(value) => `${(value / 1000000).toFixed(0)}m`}
              domain={[yAxisMin, yAxisMax]}
              axisLine={{ stroke: "#333" }}
              tickLine={false}
              tickMargin={8}
              stroke="#666"
              tick={{ fill: "#666" }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillLikes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5aa06e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5aa06e" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillFollowers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#56986a" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#56986a" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="followers"
              type="linear"
              fill="url(#fillFollowers)"
              fillOpacity={0.4}
              stroke="#56986a"
              stackId="a"
            />
            <Area
              dataKey="likes"
              type="linear"
              fill="url(#fillLikes)"
              fillOpacity={0.4}
              stroke="#b9eb41"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
