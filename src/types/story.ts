// types/story.ts

export interface StoryItem {
  id: string;
  userName: string;
  userAvatar: string;
  storyMediaUrl: string;
  unreadCount?: number;
  isCreateStory?: boolean;
  hasUnseenStories?: boolean;
}