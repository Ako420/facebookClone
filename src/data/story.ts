// mock/storiesData.ts
import { StoryItem } from '../types/story';

export const MOCK_STORIES: StoryItem[] = [
  {
    id: 'create-story',
    userName: 'Create story',
    userAvatar: 'https://picsum.photos/id/64/150/150',
    storyMediaUrl: 'https://picsum.photos/id/64/400/700',
    isCreateStory: true,
  },
  {
    id: 'story-1',
    userName: 'MMI News',
    userAvatar: 'https://picsum.photos/id/1012/100/100',
    storyMediaUrl: 'https://picsum.photos/id/1015/400/700',
    unreadCount: 7,
    hasUnseenStories: true,
  },
  {
    id: 'story-2',
    userName: 'Moses Ngala',
    userAvatar: 'https://picsum.photos/id/1025/100/100',
    storyMediaUrl: 'https://picsum.photos/id/1069/400/700',
    unreadCount: 1,
    hasUnseenStories: true,
  },
  {
    id: 'story-3',
    userName: 'Renew Tech',
    userAvatar: 'https://picsum.photos/id/1062/100/100',
    storyMediaUrl: 'https://picsum.photos/id/1084/400/700',
    unreadCount: 6,
    hasUnseenStories: true,
  },
  {
    id: 'story-4',
    userName: 'Sarah Jenkins',
    userAvatar: 'https://picsum.photos/id/1027/100/100',
    storyMediaUrl: 'https://picsum.photos/id/1040/400/700',
    unreadCount: 2,
    hasUnseenStories: false,
  },
];