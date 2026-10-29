// components/StoriesSection.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    ListRenderItem,
    Pressable,
    Text,
    View,
} from "react-native";
import { MOCK_STORIES } from "../../data/story";
import { StoryItem } from "../../types/story";

export const StoriesSection: React.FC = () => {
  const renderItem: ListRenderItem<StoryItem> = ({ item }) => {
    if (item.isCreateStory) {
      return (
        <Pressable
          activeOpacity={0.8}
          className="w-[110px] h-[190px] mx-1 rounded-xl overflow-hidden"
        >
          <ImageBackground
            source={{ uri: item.storyMediaUrl }}
            className="flex-1 justify-between"
            imageStyle={{ borderRadius: 12 }}
          >
            <View className="h-[50px] bg-white items-center justify-center absolute bottom-0 left-0 right-0">
              <View className="w-7 h-7 rounded-full bg-brand justify-center items-center -mt-3.5 border-2 border-white">
                <Ionicons name="add" size={20} color="#fff" />
              </View>
              <Text className="text-xs font-semibold text-black mt-0.5">
                Create story
              </Text>
            </View>
          </ImageBackground>
        </Pressable>
      );
    }

    return (
      <Pressable
        activeOpacity={0.8}
        className="w-[110px] h-[190px] mx-1 rounded-xl overflow-hidden"
      >
        <ImageBackground
          source={{ uri: item.storyMediaUrl }}
          className="flex-1 justify-between"
          imageStyle={{ borderRadius: 12 }}
        >
          {/* Overlay gradient/darkener */}
          <View className="flex-1 p-2 justify-between bg-black/25">
            {/* Unread badge counter */}
            {item.unreadCount ? (
              <View className="absolute top-1.5 left-1.5 bg-brand px-1.5 py-0.5 rounded z-10">
                <Text className="text-white text-xs font-bold">
                  {item.unreadCount}
                </Text>
              </View>
            ) : null}

            {/* Profile Avatar */}
            <View
              className={`w-10 h-10 rounded-full p-0.5 mt-5 ${
                item.hasUnseenStories ? "border-[2.5px] border-[#1877F2]" : ""
              }`}
            >
              <Image
                source={{ uri: item.userAvatar }}
                className="w-full h-full rounded-full"
              />
            </View>

            {/* User Name */}
            <Text
              className="text-white text-[13px] font-bold"
              numberOfLines={2}
              style={{
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 2,
              }}
            >
              {item.userName}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>
    );
  };

  return (
    <View className="py-2.5 bg-white">
      <FlatList
        data={MOCK_STORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
};
