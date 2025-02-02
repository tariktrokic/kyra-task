import { FaInstagram, FaYoutube } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";

export const REGION_NAME_MAP = {
  US: "United States",
  CA: "Canada",
  GB: "United Kingdom",
  AU: "Australia",
  NZ: "New Zealand",
};

export const LANGUAGE_NAME_MAP = {
  en: "English",
  zh: "Chinese",
  es: "Spanish",
  fr: "French",
  de: "German",
};

export enum Platform {
  TIKTOK = "tiktok",
  INSTAGRAM = "instagram",
  YOUTUBE = "youtube",
}

export const PlatformIconMap = {
  [Platform.TIKTOK]: FaTiktok,
  [Platform.INSTAGRAM]: FaInstagram,
  [Platform.YOUTUBE]: FaYoutube,
};
