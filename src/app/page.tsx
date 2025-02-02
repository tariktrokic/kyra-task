import { fetchCreatorStatsHistory, fetchCreatorBaseData } from "@/services/api";
import { Platform } from "@/types/common";
import { Header } from "@/components/CreatorProfile/Header";
import { Stats } from "@/components/CreatorProfile/Stats";
import { PlatformStats } from "@/components/CreatorProfile/PlatformStats";
import { Bio } from "@/components/CreatorProfile/Bio";
import { StatsChart } from "@/components/CreatorProfile/StatsChart";
import { PostingHistory } from "@/components/CreatorProfile/PostingHistory";

export default async function Home() {
  const creatorId = "5831967";
  const [statsHistory, baseData] = await Promise.all([
    fetchCreatorStatsHistory(creatorId),
    fetchCreatorBaseData(creatorId),
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <Header
          profilePicture={baseData.data?.tiktok?.profilePicture}
          nickname={baseData.data?.tiktok?.nickname}
          region={baseData.data?.tiktok?.region}
          language={baseData.data?.tiktok?.language}
          instagramHandle={baseData.data?.instagram?.handle}
          youtubeHandle={baseData.data?.youtube?.channelId}
          tiktokHandle={baseData.data?.tiktok?.handle}
        />

        <Stats
          averageFee={baseData?.averageFee}
          averageCPV={baseData?.averageCpv}
          predictedFee={baseData?.predictedFee}
          predictedCPV={baseData?.predictedCpv}
        />

        <nav className="border-b border-white/10">
          <ul className="flex gap-8 justify-center flex-wrap text-center">
            <li className="border-b-2 border-[#9EFF00] pb-1">
              <a href="#" className="text-[#9EFF00]">
                Account info
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="text-white hover:text-[#9EFF00]">
                Media
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="text-white hover:text-[#9EFF00]">
                Past briefs
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="text-white hover:text-[#9EFF00]">
                Audience personas
              </a>
            </li>
            <li className="pb-1">
              <a href="#" className="text-white hover:text-[#9EFF00]">
                Lookalikes
              </a>
            </li>
          </ul>
        </nav>

        {/* Just showing tiktok bio for demo purposes.
        We could use same logic as PlatformStats if we want to show other platforms dyanmically. */}
        <Bio
          handle={baseData.data?.tiktok?.handle}
          bio={baseData.data?.tiktok?.bio}
        />

        <PlatformStats
          stats={[
            {
              platform: Platform.TIKTOK,
              followers: baseData.data?.tiktok?.followersCount,
              avgViews: baseData.data?.tiktok?.medianViews,
              sponsoredViews: baseData.data?.tiktok?.sponsoredMedianViews,
              likes: baseData.data?.tiktok?.likesCount,
              engagement: baseData.data?.tiktok?.engagementRate,
              posts: baseData.data?.tiktok?.postsCount,
            },
            {
              platform: Platform.INSTAGRAM,
            },
          ]}
        />

        <StatsChart data={statsHistory.data?.historyPoints || []} />

        <PostingHistory
          historyPoints={statsHistory.data?.historyPoints || []}
        />
      </div>
    </div>
  );
}
