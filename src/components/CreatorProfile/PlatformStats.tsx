import { Platform, PlatformIconMap } from "@/constants/common";
import React from "react";

type PlatformStatsRowProps = {
  platform: Platform;
  followers?: number;
  avgViews?: number;
  sponsoredViews?: number;
  likes?: number;
  engagement?: number;
  posts?: number;
};

export function PlatformStats({ stats }: { stats: PlatformStatsRowProps[] }) {
  return (
    <div className="space-y-4 border border-white/[0.1] rounded-3xl p-4">
      {stats.map((stat) => {
        const PlatformIcon = PlatformIconMap[stat.platform];

        return (
          <div
            key={stat.platform}
            className="flex flex-col md:flex-row items-center bg-black/[0.2] rounded-lg"
          >
            <PlatformIcon size={36} />
            <div className="grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 flex-1 p-4">
              <Stat
                label="Followers"
                value={
                  stat.followers ? `${(stat.followers / 1e6).toFixed(1)}m` : "-"
                }
              />
              <Stat
                label="Average views"
                value={
                  stat.avgViews ? `${(stat.avgViews / 1e6).toFixed(1)}m` : "—"
                }
              />
              <Stat
                label="Potential sponsored views"
                value={
                  stat.sponsoredViews
                    ? `${(stat.sponsoredViews / 1e6).toFixed(1)}m`
                    : "-"
                }
              />
              <Stat
                label="Total likes"
                value={stat.likes ? `${(stat.likes / 1e9).toFixed(1)}b` : "-"}
              />
              <Stat
                label="Engagement rate"
                value={stat.engagement ? `${stat.engagement.toFixed(3)}%` : "-"}
              />
              <Stat
                label="Total posts"
                value={stat.posts ? `${(stat.posts / 1000).toFixed(1)}k` : "-"}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-3xl">{value}</div>
    </div>
  );
}
