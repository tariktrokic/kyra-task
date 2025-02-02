import { Platform } from "@/constants/common";
import { SocialHandle } from "./SocialHandle";

type BioProps = {
  handle?: string;
  bio?: string;
};

// Just showing bio for tiktok for demo purposes.
// We could use same logic as PlatformStats if we want to show other platforms dyanmically.
export function Bio({ handle, bio }: BioProps) {
  if (!handle && !bio) return null;

  return (
    <div className="rounded-3xl p-6 space-y-4 border border-white/[0.1]">
      <h2 className="text-2xl font-bold tracking-wide">Profile bio</h2>
      <div className="flex flex-wrap items-center gap-4">
        {handle && (
          <SocialHandle
            platform={Platform.TIKTOK}
            handle={handle}
            href={`https://tiktok.com/@${handle}`}
          />
        )}
        {bio && <p className="text-sm text-gray-300">{bio}</p>}
      </div>
    </div>
  );
}
