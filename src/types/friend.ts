// types.ts

export interface MutualFriend {
  id: string;
  avatarUrl: string;
}

export interface FriendRequest {
  id: string;
  name: string;
  avatarUrl: string;
  timestamp: string; 
  mutualFriendsCount: number;
  mutualFriendAvatars: string[];
}

export interface FilterOption {
  id: string;
  label: string;
  isSelected: boolean;
}

export interface HeaderTab {
  id: string;
  name: string;
  iconName: string;
  badgeCount?: string | number;
  isActive: boolean;
}

export interface FriendsScreenData {
  totalRequestsCount: number;
  tabs: HeaderTab[];
  filters: FilterOption[];
  friendRequests: FriendRequest[];
}