"use client";

import HeatMap from "@uiw/react-heat-map";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { SocialHandle } from "./SocialHandle";
import { Platform } from "@/types/common";

type HistoryPoint = {
  createdAt: string;
  postsCount: number;
  likesCount: number;
  followersCount: number;
  followingCount: number;
  viewsCount: number;
};

type PostingHistoryProps = {
  historyPoints: HistoryPoint[];
};

export function PostingHistory({ historyPoints }: PostingHistoryProps) {
  const startDate = new Date();
  startDate.setMonth(startDate.getMonth() - 11); // Show last 12 months

  // Transform history points into heatmap data
  const values = historyPoints.map((point) => ({
    date: point.createdAt,
    count: 1,
  }));

  // Get the last posted date
  const lastPosted =
    historyPoints.length > 0
      ? new Date(
          historyPoints[historyPoints.length - 1].createdAt
        ).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "2-digit",
        })
      : "No posts";

  return (
    <Card className="bg-black/20 border-white/[0.1] p-4">
      <CardHeader className="p-0">
        <CardTitle className="text-white text-sm tracking-wide">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl font-bold tracking-wide">
                Posting history
              </h2>
              <span className="text-white">Last posted: {lastPosted}</span>
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

      <CardContent className="p-0 flex justify-center">
        <div className="w-full overflow-x-auto">
          <HeatMap
            value={values}
            startDate={startDate}
            endDate={new Date()}
            width={1000}
            rectSize={14}
            space={4}
            legendCellSize={0}
            legendRender={() => <></>}
            rectProps={{
              rx: 3,
            }}
            monthLabels={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ]}
            rectRender={(props, data) => (
              <rect
                {...props}
                fill={data.count ? "#56986a" : "rgba(255, 255, 255, 0.1)"}
              />
            )}
            weekLabels={["S", "M", "T", "W", "T", "F", "S"]}
            style={{
              color: "#aaa",
              padding: "20px 0",
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
