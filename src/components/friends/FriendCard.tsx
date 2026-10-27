import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

interface cardProps {
  imageUrl: string;
  userName: string;
  // addFriend:() => void
}

const FriendCard = ({ imageUrl, userName }: cardProps) => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-80 rounded-lg ">
        <Image
          source={imageUrl}
          style={{ height: 250, borderTopRightRadius:16, borderBottomLeftRadius:16 }}
          contentFit="cover"

          className="rounded-2xl"
        />

        <View className="border-[1px] border-gray-300  rounded-b-lg p-2">
          <Text className="text-2xl font-bold">{userName}</Text>

          <Pressable className="flex-row text-brand p-4 mt-8 border-[1px] border-gray-500 rounded-lg m-2 justify-center gap-2">
            <FontAwesome6 name="user" size={20} color="blue" />
            <Text className="text-brand text-xl font-bold">Add Friend</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FriendCard;
