import Header from "@/components/Header";
import { FontAwesome6 } from "@expo/vector-icons";
import { router, Stack, useSegments } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../../global.css";


const TABS = [
  {
    name: "index",
    label: "Home",
    icon: "house",
    route: "/(tabs)",
  },
  {
    name: "friend",
    label: "Friends",
    icon: "user-group",
    route: "/(tabs)/friend",
  },
  {
    name: "message",
    label: "Messages",
    icon: "comment-dots",
    route: "/(tabs)/message",
  },
  {
    name: "reels",
    label: "Reels",
    icon: "clapperboard",
    route: "/(tabs)/reels",
  },
  {
    name: "notification",
    label: "Notifications",
    icon: "bell",
    route: "/(tabs)/notification",
  },
  {
    name: "marketPlace",
    label: "Marketplace",
    icon: "store",
    route: "/(tabs)/marketPlace",
  },
] as const;

export default function TabBarLayout() {
  const segments = useSegments();
  const currentSegment = segments.at(-1);
  const activeTab = TABS.findIndex((tab) => tab.name === currentSegment);

  return (
    <SafeAreaView className="flex-1">
   
      <Header />
      <View className="relative m-2 h-[48px] flex-row justify-between shadow-[2px]">
        {TABS.map((tab, index) => {
          const isFocused = activeTab === index || (activeTab === -1 && index === 0);
          return (
            <Pressable
              key={tab.route}
              accessibilityRole="button"
              accessibilityLabel={tab.label}
              accessibilityState={{ selected: isFocused }}
              hitSlop={8}
              onPress={() => router.navigate(tab.route)}
            >
              <FontAwesome6
                name={tab.icon}
                size={30}
                color={isFocused ? "#1877F2" : "#65676B"}
              />
            </Pressable>
          );
        })}
      </View>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
