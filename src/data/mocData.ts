/**
 * Copyable frontend fixtures for users, friends, conversations, messages, posts, reels, and groups.
 * These types mirror the API/UI data contracts so this file can be moved without project imports.
 */
export interface MockUser {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  profileUrl?: string;
  work?: string;
  intro?: string;
  location?: { city?: string; country?: string };
  friendsCount?: number;
  createdAt?: string;
}

export interface MockPerson {
  id: string;
  name?: string;
  avatarUrl?: string;
  work?: string;
  friendsCount?: number;
  online?: boolean;
  lastActiveAt?: string | null;
  birthday?: string | null;
}

export interface MockFriendEdge {
  id: string;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
  user: MockPerson;
}

export interface MockFriendLists {
  friends: MockFriendEdge[];
  incoming: MockFriendEdge[];
  outgoing: MockFriendEdge[];
}

export interface MockApiPost {
  id: string;
  type: "post" | "reel";
  title: string;
  description: string;
  imageUrl: string[];
  videoUrl: string[];
  likeCount: number;
  commentCount: number;
  reactions?: {
    counts: Record<string, number>;
    total: number;
    viewerReaction: number | null;
  };
  groupId?: string | null;
  createdAt: string;
  author: { id: string; name?: string; avatarUrl?: string };
  seen?: boolean;
}

export interface MockPostFeed {
  posts: MockApiPost[];
  caughtUp: boolean;
}

export interface MockParticipant {
  id: string;
  role: "admin" | "member";
  joinedAt: string;
  lastReadAt: string | null;
  lastDeliveredAt: string | null;
  user: MockPerson;
}

export interface MockConversation {
  id: string;
  type: "direct" | "group";
  title: string;
  avatarUrl: string | null;
  name: string;
  createdAt: string;
  lastMessageAt: string;
  lastMessage: {
    id: string;
    preview: string;
    sentAt: string;
    senderId: string;
    fromViewer: boolean;
  } | null;
  unreadCount: number;
  viewerRole: "admin" | "member" | null;
  participants: MockParticipant[];
}

export interface MockMessage {
  id: string;
  conversationId: string;
  text: string;
  attachments: {
    type: "image" | "video";
    url: string;
    publicId: string;
    width?: number;
    height?: number;
    poster?: string;
    durationSec?: number;
  }[];
  replyTo: string | null;
  createdAt: string;
  editedAt: string | null;
  deleted: boolean;
  fromViewer: boolean;
  canEdit: boolean;
  canUnsend: boolean;
  sender: { id: string; name?: string; avatarUrl?: string };
}

export interface MockConversationListResponse {
  conversations: MockConversation[];
}

export interface MockMessageListResponse {
  messages: MockMessage[];
  nextCursor: string | null;
}

export interface MockGroup {
  id: string;
  name: string;
  cover: string;
  privacy: "public" | "private";
  memberCount: number;
  postsToday: number;
  lastActiveAt: string;
  unreadCount: number;
  isJoined: boolean;
}


export const mockCurrentUser: MockUser = {
  id: "mock-viewer",
  name: "Alex Morgan",
  email: "alex.morgan@example.test",
  avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=256&h=256&fit=crop&crop=faces",
  profileUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&h=400&fit=crop",
  work: "Product designer",
  intro: "Making things for the web. Usually outside when I'm not at my desk.",
  location: { city: "San Francisco", country: "United States" },
  friendsCount: 384,
  createdAt: "2021-05-14T10:00:00.000Z",
};

export const mockUsers: MockUser[] = [
  mockCurrentUser,
  {
    id: "mock-user-sarah",
    name: "Sarah Chen",
    email: "sarah.chen@example.test",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&h=256&fit=crop&crop=faces",
    work: "Product designer",
    intro: "Design, coffee, and weekend walks.",
    location: { city: "San Francisco", country: "United States" },
    friendsCount: 521,
    createdAt: "2020-08-03T10:00:00.000Z",
  },
  {
    id: "mock-user-michael",
    name: "Michael Brown",
    email: "michael.brown@example.test",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=256&h=256&fit=crop&crop=faces",
    work: "Photographer",
    intro: "Always looking for the next great shot.",
    location: { city: "Oakland", country: "United States" },
    friendsCount: 286,
    createdAt: "2019-11-21T10:00:00.000Z",
  },
  {
    id: "mock-user-amina",
    name: "Amina Yusuf",
    email: "amina.yusuf@example.test",
    avatarUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=256&h=256&fit=crop&crop=faces",
    work: "Software engineer",
    intro: "Building useful things and learning every day.",
    location: { city: "San Jose", country: "United States" },
    friendsCount: 412,
    createdAt: "2022-02-12T10:00:00.000Z",
  },
  {
    id: "mock-user-james",
    name: "James Wilson",
    email: "james.wilson@example.test",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=faces",
    work: "Teacher",
    intro: "Books, trails, and good conversations.",
    location: { city: "Berkeley", country: "United States" },
    friendsCount: 198,
    createdAt: "2018-06-30T10:00:00.000Z",
  },
  {
    id: "mock-user-priya",
    name: "Priya Patel",
    email: "priya.patel@example.test",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=256&h=256&fit=crop&crop=faces",
    work: "Marketing manager",
    intro: "Big fan of little adventures.",
    location: { city: "San Francisco", country: "United States" },
    friendsCount: 634,
    createdAt: "2021-01-08T10:00:00.000Z",
  },
];

export const mockPeople: MockPerson[] = mockUsers.map((user, index) => ({
  id: user.id,
  name: user.name,
  avatarUrl: user.avatarUrl,
  work: user.work,
  friendsCount: user.friendsCount,
  online: index === 1 || index === 3 || index === 5,
  lastActiveAt: index === 1 || index === 3 || index === 5 ? null : "2026-10-29T08:30:00.000Z",
  birthday: index === 2 ? "10-29" : null,
})).concat([
  {
    id: "mock-user-olivia",
    name: "Olivia Taylor",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=256&h=256&fit=crop&crop=faces",
    work: "Illustrator",
    friendsCount: 153,
    online: false,
    lastActiveAt: "2026-10-28T22:15:00.000Z",
    birthday: null,
  },
  {
    id: "mock-user-noah",
    name: "Noah Davis",
    avatarUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=256&h=256&fit=crop&crop=faces",
    work: "Chef",
    friendsCount: 209,
    online: true,
    lastActiveAt: null,
    birthday: null,
  },
  {
    id: "mock-user-emma",
    name: "Emma Garcia",
    avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=256&h=256&fit=crop&crop=faces",
    work: "Nurse",
    friendsCount: 87,
    online: false,
    lastActiveAt: "2026-10-28T17:10:00.000Z",
    birthday: "11-12",
  },
]);

const personById = (id: string) => {
  const person = mockPeople.find((row) => row.id === id);
  if (!person) throw new Error(`Mock person "${id}" is missing.`);
  return person;
};

const friendEdge = (
  id: string,
  userId: string,
  status: "pending" | "accepted" | "rejected",
  createdAt: string,
) => ({
  id,
  user: personById(userId),
  status,
  createdAt,
});

export const mockFriendLists: MockFriendLists = {
  friends: [
    friendEdge("mock-friend-sarah", "mock-user-sarah", "accepted", "2022-03-15T12:00:00.000Z"),
    friendEdge("mock-friend-michael", "mock-user-michael", "accepted", "2021-09-10T12:00:00.000Z"),
    friendEdge("mock-friend-amina", "mock-user-amina", "accepted", "2023-02-18T12:00:00.000Z"),
    friendEdge("mock-friend-james", "mock-user-james", "accepted", "2020-07-22T12:00:00.000Z"),
    friendEdge("mock-friend-priya", "mock-user-priya", "accepted", "2022-11-04T12:00:00.000Z"),
  ],
  incoming: [
    friendEdge("mock-request-incoming-olivia", "mock-user-olivia", "pending", "2026-10-28T15:20:00.000Z"),
  ],
  outgoing: [
    friendEdge("mock-request-outgoing-noah", "mock-user-noah", "pending", "2026-10-27T09:45:00.000Z"),
  ],
};

export const mockSuggestions: MockPerson[] = [
  {
    id: "mock-user-olivia",
    name: "Olivia Taylor",
    avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=256&h=256&fit=crop&crop=faces",
    work: "Illustrator",
    friendsCount: 153,
    online: false,
    lastActiveAt: "2026-10-28T22:15:00.000Z",
    birthday: null,
  },
  {
    id: "mock-user-noah",
    name: "Noah Davis",
    avatarUrl: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=256&h=256&fit=crop&crop=faces",
    work: "Chef",
    friendsCount: 209,
    online: true,
    lastActiveAt: null,
    birthday: null,
  },
  {
    id: "mock-user-emma",
    name: "Emma Garcia",
    avatarUrl: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=256&h=256&fit=crop&crop=faces",
    work: "Nurse",
    friendsCount: 87,
    online: false,
    lastActiveAt: "2026-10-28T17:10:00.000Z",
    birthday: "11-12",
  },
];

export const mockPostFeed: MockPostFeed = {
  caughtUp: false,
  posts: [
    {
      id: "mock-post-sarah-park",
      type: "post",
      title: "Found a quiet little spot for a coffee and a book this morning.",
      description: "",
      imageUrl: [
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1200&auto=format&fit=crop",
      ],
      videoUrl: [],
      likeCount: 28,
      commentCount: 4,
      reactions: { counts: { "1": 18, "2": 7, "4": 3 }, total: 28, viewerReaction: 1 },
      groupId: null,
      seen: false,
      createdAt: "2026-10-29T07:35:00.000Z",
      author: {
        id: "mock-user-sarah",
        name: "Sarah Chen",
        avatarUrl: personById("mock-user-sarah").avatarUrl,
      },
    },
    {
      id: "mock-post-michael-coast",
      type: "post",
      title: "A few frames from yesterday's coast trip. The light was unreal.",
      description: "",
      imageUrl: [
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1473116763249-2ffaa01cf1ff?w=1200&auto=format&fit=crop",
      ],
      videoUrl: [],
      likeCount: 64,
      commentCount: 9,
      reactions: { counts: { "1": 41, "2": 17, "3": 6 }, total: 64, viewerReaction: null },
      groupId: null,
      seen: false,
      createdAt: "2026-10-28T18:20:00.000Z",
      author: {
        id: "mock-user-michael",
        name: "Michael Brown",
        avatarUrl: personById("mock-user-michael").avatarUrl,
      },
    },
    {
      id: "mock-post-viewer-design",
      type: "post",
      title: "Wrapped up a redesign I've been working on. Always satisfying to see it come together.",
      description: "",
      imageUrl: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop",
      ],
      videoUrl: [],
      likeCount: 43,
      commentCount: 6,
      reactions: { counts: { "1": 31, "2": 8, "4": 4 }, total: 43, viewerReaction: null },
      groupId: null,
      seen: true,
      createdAt: "2026-10-27T15:05:00.000Z",
      author: {
        id: mockCurrentUser.id,
        name: mockCurrentUser.name,
        avatarUrl: mockCurrentUser.avatarUrl,
      },
    },
  ],
};

export const mockPosts: MockApiPost[] = mockPostFeed.posts.filter((post) => post.type === "post");

const mockReelVideo = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

export const mockReels: MockApiPost[] = [
  {
    id: "mock-reel-priya-sunset",
    type: "reel",
    title: "Golden hour on the way home ✨",
    description: "",
    imageUrl: [],
    videoUrl: [mockReelVideo],
    likeCount: 416,
    commentCount: 38,
    reactions: { counts: { "1": 292, "2": 94, "4": 30 }, total: 416, viewerReaction: 2 },
    groupId: null,
    seen: false,
    createdAt: "2026-10-29T06:10:00.000Z",
    author: {
      id: "mock-user-priya",
      name: "Priya Patel",
      avatarUrl: personById("mock-user-priya").avatarUrl,
    },
  },
  {
    id: "mock-reel-james-trail",
    type: "reel",
    title: "A little trail reset for your feed 🌿",
    description: "",
    imageUrl: [],
    videoUrl: [mockReelVideo],
    likeCount: 183,
    commentCount: 17,
    reactions: { counts: { "1": 143, "2": 29, "3": 11 }, total: 183, viewerReaction: null },
    groupId: null,
    seen: false,
    createdAt: "2026-10-28T14:30:00.000Z",
    author: {
      id: "mock-user-james",
      name: "James Wilson",
      avatarUrl: personById("mock-user-james").avatarUrl,
    },
  },
  {
    id: "mock-reel-amina-coding",
    type: "reel",
    title: "Small wins after a long debugging session 💻",
    description: "",
    imageUrl: [],
    videoUrl: [mockReelVideo],
    likeCount: 257,
    commentCount: 24,
    reactions: { counts: { "1": 190, "2": 49, "4": 18 }, total: 257, viewerReaction: null },
    groupId: null,
    seen: false,
    createdAt: "2026-10-27T19:45:00.000Z",
    author: {
      id: "mock-user-amina",
      name: "Amina Yusuf",
      avatarUrl: personById("mock-user-amina").avatarUrl,
    },
  },
];

export const mockReelFeed: MockPostFeed = {
  posts: mockReels,
  caughtUp: false,
};


export const mockGroups: MockGroup[] = [
  {
    id: "mock-group-designers",
    name: "Designers who code",
    cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&auto=format&fit=crop",
    privacy: "public",
    memberCount: 12840,
    postsToday: 18,
    lastActiveAt: "2026-10-29T08:40:00.000Z",
    unreadCount: 3,
    isJoined: true,
  },
  {
    id: "mock-group-weekend-hikers",
    name: "Bay Area weekend hikers",
    cover: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&auto=format&fit=crop",
    privacy: "public",
    memberCount: 6240,
    postsToday: 7,
    lastActiveAt: "2026-10-29T07:15:00.000Z",
    unreadCount: 0,
    isJoined: true,
  },
  {
    id: "mock-group-friends-cooking",
    name: "Friends who love cooking",
    cover: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop",
    privacy: "private",
    memberCount: 426,
    postsToday: 2,
    lastActiveAt: "2026-10-28T20:30:00.000Z",
    unreadCount: 0,
    isJoined: false,
  },
];

export const mockConversationResponse: MockConversationListResponse = {
  "conversations": [
    {
      "id": "mock-chat-sarah",
      "type": "direct",
      "title": "Sarah Chen",
      "avatarUrl": null,
      "name": "",
      "createdAt": "2026-10-27T09:00:00.000Z",
      "lastMessageAt": "2026-10-29T08:42:00.000Z",
      "lastMessage": {
        "id": "mock-message-sarah-3",
        "preview": "That sounds lovely. We should catch up soon!",
        "sentAt": "2026-10-29T08:42:00.000Z",
        "senderId": "mock-user-sarah",
        "fromViewer": false
      },
      "unreadCount": 2,
      "viewerRole": "member",
      "participants": [
        {
          "id": "mock-membership-sarah-viewer",
          "role": "member",
          "joinedAt": "2026-10-27T09:00:00.000Z",
          "lastReadAt": "2026-10-29T08:00:00.000Z",
          "lastDeliveredAt": "2026-10-29T08:00:00.000Z",
          "user": {
            "id": "mock-viewer",
            "name": "Alex Morgan"
          }
        },
        {
          "id": "mock-membership-sarah",
          "role": "member",
          "joinedAt": "2026-10-27T09:00:00.000Z",
          "lastReadAt": "2026-10-29T08:45:00.000Z",
          "lastDeliveredAt": "2026-10-29T08:45:00.000Z",
          "user": {
            "id": "mock-user-sarah",
            "name": "Sarah Chen",
            "work": "Product designer",
            "online": true
          }
        }
      ]
    },
    {
      "id": "mock-chat-michael",
      "type": "direct",
      "title": "Michael Brown",
      "avatarUrl": null,
      "name": "",
      "createdAt": "2026-10-26T14:00:00.000Z",
      "lastMessageAt": "2026-10-28T09:20:00.000Z",
      "lastMessage": {
        "id": "mock-message-michael-2",
        "preview": "Thanks! I'll send you the rest later today.",
        "sentAt": "2026-10-28T09:20:00.000Z",
        "senderId": "mock-user-michael",
        "fromViewer": false
      },
      "unreadCount": 0,
      "viewerRole": "member",
      "participants": [
        {
          "id": "mock-membership-michael-viewer",
          "role": "member",
          "joinedAt": "2026-10-26T14:00:00.000Z",
          "lastReadAt": "2026-10-28T09:30:00.000Z",
          "lastDeliveredAt": "2026-10-28T09:30:00.000Z",
          "user": {
            "id": "mock-viewer",
            "name": "Alex Morgan"
          }
        },
        {
          "id": "mock-membership-michael",
          "role": "member",
          "joinedAt": "2026-10-26T14:00:00.000Z",
          "lastReadAt": "2026-10-28T09:30:00.000Z",
          "lastDeliveredAt": "2026-10-28T09:30:00.000Z",
          "user": {
            "id": "mock-user-michael",
            "name": "Michael Brown",
            "work": "Photographer",
            "online": false
          }
        }
      ]
    },
    {
      "id": "mock-chat-amina",
      "type": "direct",
      "title": "Amina Yusuf",
      "avatarUrl": null,
      "name": "",
      "createdAt": "2026-10-25T10:00:00.000Z",
      "lastMessageAt": "2026-10-29T08:12:00.000Z",
      "lastMessage": {
        "id": "mock-message-amina-3",
        "preview": "Perfect, see you then!",
        "sentAt": "2026-10-29T08:12:00.000Z",
        "senderId": "mock-user-amina",
        "fromViewer": false
      },
      "unreadCount": 0,
      "viewerRole": "member",
      "participants": [
        {
          "id": "mock-membership-amina-viewer",
          "role": "member",
          "joinedAt": "2026-10-25T10:00:00.000Z",
          "lastReadAt": "2026-10-29T08:20:00.000Z",
          "lastDeliveredAt": "2026-10-29T08:20:00.000Z",
          "user": {
            "id": "mock-viewer",
            "name": "Alex Morgan"
          }
        },
        {
          "id": "mock-membership-amina",
          "role": "member",
          "joinedAt": "2026-10-25T10:00:00.000Z",
          "lastReadAt": "2026-10-29T08:20:00.000Z",
          "lastDeliveredAt": "2026-10-29T08:20:00.000Z",
          "user": {
            "id": "mock-user-amina",
            "name": "Amina Yusuf",
            "work": "Software engineer",
            "online": true
          }
        }
      ]
    },
    {
      "id": "mock-chat-weekend",
      "type": "group",
      "title": "Weekend hikers",
      "avatarUrl": null,
      "name": "Weekend hikers",
      "createdAt": "2026-10-22T09:00:00.000Z",
      "lastMessageAt": "2026-10-29T03:12:00.000Z",
      "lastMessage": {
        "id": "mock-message-weekend-3",
        "preview": "Yes! I'll bring snacks.",
        "sentAt": "2026-10-29T03:12:00.000Z",
        "senderId": "mock-viewer",
        "fromViewer": true
      },
      "unreadCount": 0,
      "viewerRole": "admin",
      "participants": [
        {
          "id": "mock-membership-weekend-viewer",
          "role": "admin",
          "joinedAt": "2026-10-22T09:00:00.000Z",
          "lastReadAt": "2026-10-29T03:20:00.000Z",
          "lastDeliveredAt": "2026-10-29T03:20:00.000Z",
          "user": {
            "id": "mock-viewer",
            "name": "Alex Morgan"
          }
        },
        {
          "id": "mock-membership-weekend-james",
          "role": "member",
          "joinedAt": "2026-10-22T09:00:00.000Z",
          "lastReadAt": "2026-10-29T03:15:00.000Z",
          "lastDeliveredAt": "2026-10-29T03:15:00.000Z",
          "user": {
            "id": "mock-user-james",
            "name": "James Wilson",
            "work": "Teacher",
            "online": false
          }
        },
        {
          "id": "mock-membership-weekend-priya",
          "role": "member",
          "joinedAt": "2026-10-22T09:00:00.000Z",
          "lastReadAt": "2026-10-29T03:15:00.000Z",
          "lastDeliveredAt": "2026-10-29T03:15:00.000Z",
          "user": {
            "id": "mock-user-priya",
            "name": "Priya Patel",
            "work": "Marketing manager",
            "online": true
          }
        }
      ]
    },
    {
      "id": "mock-chat-project",
      "type": "group",
      "title": "Project team",
      "avatarUrl": null,
      "name": "Project team",
      "createdAt": "2026-10-15T12:00:00.000Z",
      "lastMessageAt": "2026-10-28T16:42:00.000Z",
      "lastMessage": {
        "id": "mock-message-project-3",
        "preview": "Agreed. Let's review it together tomorrow.",
        "sentAt": "2026-10-28T16:42:00.000Z",
        "senderId": "mock-viewer",
        "fromViewer": true
      },
      "unreadCount": 0,
      "viewerRole": "admin",
      "participants": [
        {
          "id": "mock-membership-project-viewer",
          "role": "admin",
          "joinedAt": "2026-10-15T12:00:00.000Z",
          "lastReadAt": "2026-10-28T16:50:00.000Z",
          "lastDeliveredAt": "2026-10-28T16:50:00.000Z",
          "user": {
            "id": "mock-viewer",
            "name": "Alex Morgan"
          }
        },
        {
          "id": "mock-membership-project-amina",
          "role": "member",
          "joinedAt": "2026-10-15T12:00:00.000Z",
          "lastReadAt": "2026-10-28T16:45:00.000Z",
          "lastDeliveredAt": "2026-10-28T16:45:00.000Z",
          "user": {
            "id": "mock-user-amina",
            "name": "Amina Yusuf",
            "work": "Software engineer",
            "online": true
          }
        },
        {
          "id": "mock-membership-project-sarah",
          "role": "member",
          "joinedAt": "2026-10-15T12:00:00.000Z",
          "lastReadAt": "2026-10-28T16:45:00.000Z",
          "lastDeliveredAt": "2026-10-28T16:45:00.000Z",
          "user": {
            "id": "mock-user-sarah",
            "name": "Sarah Chen",
            "work": "Product designer",
            "online": true
          }
        }
      ]
    }
  ]
};

export const mockConversations = mockConversationResponse.conversations;

export const mockMessageResponses: Record<string, MockMessageListResponse> = {
  "mock-chat-sarah": {
    "messages": [
      {
        "id": "mock-message-sarah-1",
        "conversationId": "mock-chat-sarah",
        "text": "Hey Alex! How have you been?",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T05:54:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-sarah",
          "name": "Sarah Chen"
        }
      },
      {
        "id": "mock-message-sarah-2",
        "conversationId": "mock-chat-sarah",
        "text": "Doing well! Just getting back from a walk.",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T06:06:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": true,
        "canEdit": true,
        "canUnsend": true,
        "sender": {
          "id": "mock-viewer",
          "name": "Alex Morgan"
        }
      },
      {
        "id": "mock-message-sarah-3",
        "conversationId": "mock-chat-sarah",
        "text": "That sounds lovely. We should catch up soon!",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T08:42:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-sarah",
          "name": "Sarah Chen"
        }
      }
    ],
    "nextCursor": null
  },
  "mock-chat-michael": {
    "messages": [
      {
        "id": "mock-message-michael-1",
        "conversationId": "mock-chat-michael",
        "text": "Those photos from the weekend look great!",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-28T09:00:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": true,
        "canEdit": true,
        "canUnsend": true,
        "sender": {
          "id": "mock-viewer",
          "name": "Alex Morgan"
        }
      },
      {
        "id": "mock-message-michael-2",
        "conversationId": "mock-chat-michael",
        "text": "Thanks! I'll send you the rest later today.",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-28T09:20:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-michael",
          "name": "Michael Brown"
        }
      }
    ],
    "nextCursor": null
  },
  "mock-chat-amina": {
    "messages": [
      {
        "id": "mock-message-amina-1",
        "conversationId": "mock-chat-amina",
        "text": "Are we still on for lunch tomorrow?",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T07:52:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-amina",
          "name": "Amina Yusuf"
        }
      },
      {
        "id": "mock-message-amina-2",
        "conversationId": "mock-chat-amina",
        "text": "Absolutely. Noon at our usual place?",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T08:01:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": true,
        "canEdit": true,
        "canUnsend": true,
        "sender": {
          "id": "mock-viewer",
          "name": "Alex Morgan"
        }
      },
      {
        "id": "mock-message-amina-3",
        "conversationId": "mock-chat-amina",
        "text": "Perfect, see you then!",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T08:12:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-amina",
          "name": "Amina Yusuf"
        }
      }
    ],
    "nextCursor": null
  },
  "mock-chat-weekend": {
    "messages": [
      {
        "id": "mock-message-weekend-1",
        "conversationId": "mock-chat-weekend",
        "text": "I found a great trail for Saturday!",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T03:00:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-james",
          "name": "James Wilson"
        }
      },
      {
        "id": "mock-message-weekend-2",
        "conversationId": "mock-chat-weekend",
        "text": "The lake loop? Count me in!",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T03:05:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-priya",
          "name": "Priya Patel"
        }
      },
      {
        "id": "mock-message-weekend-3",
        "conversationId": "mock-chat-weekend",
        "text": "Yes! I'll bring snacks.",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-29T03:12:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": true,
        "canEdit": true,
        "canUnsend": true,
        "sender": {
          "id": "mock-viewer",
          "name": "Alex Morgan"
        }
      }
    ],
    "nextCursor": null
  },
  "mock-chat-project": {
    "messages": [
      {
        "id": "mock-message-project-1",
        "conversationId": "mock-chat-project",
        "text": "I shared the updated designs in the folder.",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-28T16:02:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-amina",
          "name": "Amina Yusuf"
        }
      },
      {
        "id": "mock-message-project-2",
        "conversationId": "mock-chat-project",
        "text": "The new flow is much clearer.",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-28T16:22:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": false,
        "canEdit": false,
        "canUnsend": false,
        "sender": {
          "id": "mock-user-sarah",
          "name": "Sarah Chen"
        }
      },
      {
        "id": "mock-message-project-3",
        "conversationId": "mock-chat-project",
        "text": "Agreed. Let's review it together tomorrow.",
        "attachments": [],
        "replyTo": null,
        "createdAt": "2026-10-28T16:42:00.000Z",
        "editedAt": null,
        "deleted": false,
        "fromViewer": true,
        "canEdit": true,
        "canUnsend": true,
        "sender": {
          "id": "mock-viewer",
          "name": "Alex Morgan"
        }
      }
    ],
    "nextCursor": null
  }
};

export const mockMessages = mockMessageResponses;
