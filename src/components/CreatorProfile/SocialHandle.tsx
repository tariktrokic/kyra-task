import { Platform, PlatformIconMap } from "@/constants/common";
import { HiExternalLink } from "react-icons/hi";

type SocialHandleProps = {
  platform: Platform;
  handle?: string;
  href?: string;
  text?: string;
};

export const SocialHandle = ({
  platform,
  handle,
  href,
  text,
}: SocialHandleProps) => {
  const Icon = PlatformIconMap[platform];

  const displayText =
    text || (platform === Platform.YOUTUBE ? "YouTube" : `@${handle}`);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 bg-[#19191e] p-1 rounded-lg hover:bg-[#19191e]/80 transition-colors"
    >
      <Icon />
      <span className="text-sm">{displayText}</span>
      {href && <HiExternalLink className="text-sm" />}
    </a>
  );
};
