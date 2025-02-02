import {
  CreatorStatsHistory,
  ApiResponse,
  CreatorBaseData,
  CreatorBaseDataMetadata,
} from "@/types/api";

const BASE_URL = process.env.NEXT_PUBLIC_KYRA_API_BASE_URL;

const fetchWithAuth = async <T, U = Record<string, never>>(
  url: string
): Promise<ApiResponse<T, U>> => {
  const response = await fetch(url, {
    headers: {
      "x-kyra-swagger": process.env.NEXT_PUBLIC_KYRA_API_KEY || "",
    },
  });
  const json: ApiResponse<T, U> = await response.json();
  return json;
};

export const fetchCreatorStatsHistory = async (creatorId: string) => {
  return fetchWithAuth<CreatorStatsHistory>(
    `${BASE_URL}/discovery/creators/${creatorId}/stats-history`
  );
};

export const fetchCreatorBaseData = async (creatorId: string) => {
  return fetchWithAuth<CreatorBaseData, CreatorBaseDataMetadata>(
    `${BASE_URL}/discovery/creators/${creatorId}/base-data`
  );
};
