
import UserRow from "@/components/message/UserRow";
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { CHAT_THREADS, USERS } from '@/data/userchat'
import { Pressable, Text, View } from "react-native";
import MessageList from "@/components/message/MessageList";



const Message = () => {
  const router = useRouter();


  return (
    <View>
      <View className="flex-row justify-between mx-2">
        <View className="flex-row gap-4 mt-0">
          <Pressable onPress={() => router.back()}>
            <FontAwesome6 name="angle-left" size={25} color="black" />
          </Pressable>

          <Text className="text-black text-3xl font-semibold">Messages</Text>
        </View>

        <View className="flex-row gap-4">
          <FontAwesome6 name="gear" size={25} color="black" />
          <FontAwesome6 name="magnifying-glass" size={25} color="black" />
        </View>
      </View>

       <UserRow user={USERS} />

       <MessageList messages={CHAT_THREADS} />
    </View>
  );
};

export default Message;
