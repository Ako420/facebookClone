
export type MessageDeliveryStatus = 'sent' | 'delivered' | 'read';

export interface User {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline: boolean;
  noteText?: string;
}

export interface ChatThread {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  isSentByMe: boolean;
  status?: MessageDeliveryStatus;
}