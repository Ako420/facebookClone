export interface ReelUser {
  id: string;
  username: string;
  avatarUrl: string;
  isFollowing: boolean;
}

export interface ReelData {
  id: string;
  videoUrl: string;
  thumbnailUrl?: string;
  user: ReelUser;
  caption: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
}