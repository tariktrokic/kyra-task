import { PlatformIconMap } from "@/constants/common";
import { Platform } from "@/types/common";
import { CountUpAnimation } from "@/components/ui/countup";

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
    <div className="space-y-8 border border-white/[0.1] rounded-3xl p-4">
      {stats.map((stat) => {
        const PlatformIcon = PlatformIconMap[stat.platform];

        return (
          <div
            key={stat.platform}
            className="flex flex-col md:flex-row items-center bg-black/[0.2] rounded-lg gap-4"
          >
            <PlatformIcon size={32} />
            <div className="grid items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 flex-1">
              <Stat
                label="Followers"
                value={stat.followers ? stat.followers / 1e6 : "-"}
                suffix="m"
              />
              <Stat
                label="Average views"
                value={stat.avgViews ? stat.avgViews / 1e6 : "-"}
                suffix="m"
              />
              <Stat
                label="Potential sponsored views"
                value={stat.sponsoredViews ? stat.sponsoredViews / 1e6 : "-"}
                suffix="m"
              />
              <Stat
                label="Total likes"
                value={stat.likes ? stat.likes / 1e9 : "-"}
                suffix="b"
              />
              <Stat
                label="Engagement rate"
                value={stat.engagement ? stat.engagement / 100 : "-"}
                suffix="%"
                decimals={3}
              />
              <Stat
                label="Total posts"
                value={stat.posts ? stat.posts / 1000 : "-"}
                suffix="k"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Stat({
  label,
  value,
  decimals = 1,
  suffix,
}: {
  label: string;
  value: number | string;
  decimals?: number;
  suffix?: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-sm text-gray-400 whitespace-wrap md:whitespace-nowrap">
        {label}
      </div>
      <div className="text-3xl">
        {!isNaN(Number(value)) ? (
          <CountUpAnimation
            value={Number(value)}
            suffix={suffix}
            decimals={decimals}
          />
        ) : (
          value
        )}
      </div>
    </div>
  );
}
