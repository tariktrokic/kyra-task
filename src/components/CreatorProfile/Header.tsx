import Image from "next/image";
import { HiLocationMarker, HiTranslate } from "react-icons/hi";
import { LANGUAGE_NAME_MAP, REGION_NAME_MAP } from "@/constants/common";
import { Platform } from "@/types/common";
import { SocialHandle } from "./SocialHandle";

type HeaderProps = {
  profilePicture?: string;
  nickname?: string;
  region?: string;
  language?: string;
  instagramHandle?: string;
  youtubeHandle?: string;
  tiktokHandle?: string;
};

export function Header({
  profilePicture,
  nickname,
  region,
  language,
  instagramHandle,
  youtubeHandle,
  tiktokHandle,
}: HeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      {profilePicture && (
        <Image
          src={profilePicture}
          alt={`${nickname}'s profile picture`}
          width={120}
          height={120}
          className="rounded-full"
        />
      )}

      <div className="flex flex-col items-center gap-3">
        <h1 className="text-3xl font-bold tracking-wide">{nickname}</h1>
        <div className="flex gap-4 text-sm">
          <span className="flex items-center gap-1">
            <HiLocationMarker className="text-base" />
            {region && region in REGION_NAME_MAP
              ? REGION_NAME_MAP[region as keyof typeof REGION_NAME_MAP]
              : "-"}
          </span>
          <span className="flex items-center gap-1">
            <HiTranslate className="text-base" />
            {language && language in LANGUAGE_NAME_MAP
              ? LANGUAGE_NAME_MAP[language as keyof typeof LANGUAGE_NAME_MAP]
              : "-"}
          </span>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {tiktokHandle && (
          <SocialHandle
            platform={Platform.TIKTOK}
            handle={tiktokHandle}
            href={`https://tiktok.com/@${tiktokHandle}`}
          />
        )}
        {instagramHandle && (
          <SocialHandle
            platform={Platform.INSTAGRAM}
            handle={instagramHandle}
            href={`https://instagram.com/${instagramHandle}`}
          />
        )}
        {youtubeHandle && (
          <SocialHandle
            platform={Platform.YOUTUBE}
            handle={youtubeHandle}
            href={`https://youtube.com/channel/${youtubeHandle}`}
          />
        )}
      </div>
    </div>
  );
}
