export type ApiResponse<T, U> = {
  data: T;
} & U;

export type CreatorStatsHistory = {
  delta: {
    postsCount: {
      absolute: number;
      percentage: number;
    };
    likesCount: {
      absolute: number;
      percentage: number;
    };
    followersCount: {
      absolute: number;
      percentage: number;
    };
    followingCount: {
      absolute: number;
      percentage: number;
    };
  };
  historyPoints: {
    createdAt: string;
    postsCount: number;
    likesCount: number;
    followersCount: number;
    followingCount: number;
    viewsCount: number;
  }[];
};

export type CreatorBaseData = {
  id: string;
  tiktok?: {
    externalId: string;
    id: string;
    handle: string;
    followersCount: number;
    engagementRate: number;
    followingCount: number;
    likesCount: number;
    postsCount: number;
    region: string;
    bio: string;
    isPrivate: number;
    isVerified: boolean;
    isActive: boolean;
    medianEngagement: number;
    medianViews: number;
    sponsoredMedianEngagement: number;
    sponsoredMedianViews: number;
    isBrand: boolean;
    isKyra: number;
    profilePicture: string;
    nickname: string;
    language: string;
    mostRecentPostsWithTypes: unknown[];
  };
  instagram?: {
    handle: string;
  };
  youtube?: {
    channelId: string;
  };
  general?: {
    email?: string;
  };
  predAge: string;
  predGender: string;
};

export type CreatorBaseDataMetadata = {
  predictedFee?: number;
  predictedCpv?: number;
  averageFee?: number;
  averageCpv?: number;
};
