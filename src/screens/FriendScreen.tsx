import MutualFriendsRow from "@/components/friends/MutualFriend";
import { FRIEND_REQUESTS } from "@/data/friend";
import { FriendRequest } from "@/types/friend";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native";

const FriendScreen = () => {
  const router = useRouter()

  const renderItem: ListRenderItem<FriendRequest> = ({ item }) => {
    return (
      <View className="flex-row gap-2  my-2  items-center">
        <Image
          source={{ uri: item.avatarUrl }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
          contentFit="cover"
        />

        <View className="flex-col gap-1.5 ">
          <View className="flex-row justify-between">
            <Text className="text-xl font-medium">{item.name}</Text>
            <Text>{item.timestamp}</Text>
          </View>

          <MutualFriendsRow
            count={item.mutualFriendsCount}
            avatars={item.mutualFriendAvatars}
          />

          <View className="flex-row gap-2">
            <Pressable className="py-2  px-10 rounded-xl bg-brand">
              <Text className="text-white font-bold text-xl">Confirm</Text>
            </Pressable>

            <Pressable className="py-2 px-10 rounded-xl bg-gray-200">
              <Text className="font-bold text-xl">Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View className="justify-center mx-2 gap-2">
      <View className="flex-row justify-between mx-2">
        <View className="flex-row gap-4 mt-0">
          <Pressable onPress={() => router.back()}>
            <FontAwesome6 name="angle-left" size={25} color="black" />
          </Pressable>
          <Text className="text-black text-3xl font-semibold">Friends</Text>
        </View>
        <FontAwesome6 name="magnifying-glass" size={25} color="black" />
      </View>

      <View className="flex-row justify-between">
        <Text className="text-xl font-semibold ">Friend request({FRIEND_REQUESTS.length})</Text>
        <Text className="text-brand text-lg font-semibold">see All</Text>
      </View>

      <View className="flex-row gap-2 ">
        <Pressable className=" bg-gray-300 p-2 rounded-3xl text-2xl font-bold ">
          <Text className="text-xl font-semibold">Suggestions</Text>
        </Pressable>
        <Pressable className=" bg-gray-300 p-2 rounded-3xl">
          <Text className="text-xl font-semibold">Your friends</Text>
        </Pressable>
      </View>

      <FlatList
        data={FRIEND_REQUESTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
};

export default FriendScreen;
