export type MessageType = "text" | "image" | "like" | "audio";
export type MessageStatus = "sent" | "delivered" | "read";

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  text?: string;
  mediaUrl?: string;
  type: MessageType;
  timestamp: string;
  isMe: boolean;
  status?: MessageStatus;
}


