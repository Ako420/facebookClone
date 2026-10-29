import { cn } from "@/lib/cn";
import { ChatThread } from "@/types/user";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native";

interface messagePros {
  messages: ChatThread[];
}

const MessageList = ({ messages }: messagePros) => {
  const router = useRouter();
  const renderItem: ListRenderItem<ChatThread> = ({ item }) => {
    return (
      <Pressable
        className="flex-row gap-2 w-full px-2.5 items-center"
        onPress={() =>
          router.push({
            pathname: "/chats/[id]",
            params: { id: item.id, name: item.user.name , avatarUrl:item.user.avatarUrl},
          })
        }
      >
        <View className="m-2 items-center">
          {item.user.isOnline && (
            <View className="border-1.5 border-white/30 absolute bottom-0 right-0">
              <View className="bg-green-500 size-2.5 rounded-full" />
            </View>
          )}

          <Image
            source={item.user.avatarUrl}
            style={{ width: 60, height: 60, borderRadius: 30 }}
            contentFit="cover"
          />
        </View>
        <View className="gap-0  flex-1">
          <View className=" flex-row  justify-between">
            <Text
              className={cn(
                "text-xl",
                item.unreadCount === 0
                  ? "text-black/80 "
                  : "text-black font-semibold",
              )}
            >
              {item.user.name.split(/\s+/)[0]}
            </Text>
            <Text>{item.timestamp}</Text>
          </View>
          <View className="flex-row  justify-between">
            <Text>{item.lastMessage}</Text>
            {item.unreadCount > 0 ? <Text>{item.unreadCount}</Text> : null}
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={messages}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      className=" py-2"
    />
  );
};

export default MessageList;
