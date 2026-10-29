import { Header } from "@/components/message/Header";
import Avatar from "@/components/ui/Avatar";
import { Message } from "@/types/conversation";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    ListRenderItem,
    Modal,
    Pressable,
    Text,
    View
} from "react-native";
import { CONVERSATIONS } from "../data/conversation";
import { cn } from "../lib/cn";

interface chatProps {
  id: string;
  name: string;
  avatarUrl: string;
}
const ChatsScreen = ({ id, name, avatarUrl }: chatProps) => {
  const [message, setmessage] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const activeUer:number = 12;

  const conversation: Message[] = CONVERSATIONS.filter(
    (conversation) => id === conversation.chatId,
  );

  const router = useRouter();

  const chatItem: ListRenderItem<Message> = ({ item }) => {
    return (
      <View
        className={cn("w-full px-4", item.isMe ? "items-end" : "items-start")}
      >
        {!item.isMe && <Avatar imageUrl={avatarUrl} size={25} />}

        {item.text && (
          <Text
            className={cn(
              "p-4 rounded-xl  my-4 text-lg",
              !item.isMe
                ? "bg-gray-300 rounded-tl-none"
                : "bg-brand text-white rounded-tr-none",
            )}
          >
            {item.text}
          </Text>
        )}
        {item.mediaUrl && (
          <View>
            <Pressable onPress={() => setModalVisible(true)}>
              <Image
                source={{ uri: item.mediaUrl }}
                style={{ width: 130, height: 250, borderRadius: 20 }}
                contentFit="cover"
              />

            </Pressable>

            <Modal
              visible={modalVisible}
              transparent={true}
              animationType="fade"
              onRequestClose={() => setModalVisible(false)}
            >
           
      
        <View className="flex-1 bg-black/95 justify-center items-center">
          <View className="w-full h-full flex justify-between">
            
           
            <View className="flex-row justify-end px-6 pt-4">
              <Pressable 
                className="bg-muted-dark p-2 rounded-full"
                onPress={() => setModalVisible(false)}
              >
                <FontAwesome6 name='x' size={20}  color='black'/>
              </Pressable>
            </View>

            <View className="flex-1 justify-center items-center px-4">
              <Image 
                source={{ uri: item.mediaUrl }} 
                style={{width:'100%',height:'95%'}}
                contentFit='cover'
              />
            </View>

            
            <View className="items-center pb-8 px-6">
              <Pressable 
                className="w-full bg-blue-600 py-4 rounded-xl flex-row justify-center items-center"
                disabled={downloading}
              >
                {downloading ? (
                  <ActivityIndicator color="#fff" className="mr-2" />
                ) : null}
                <Text className="text-white font-semibold text-base">
                  {downloading ? 'Downloading...' : 'Download Image'}
                </Text>
              </Pressable>
            </View>

          </View>
        </View>
            </Modal>
          </View>
        )}
      </View>
    );
  };

  return (
    <View className=" justify-center mx-2  ">
      <View className="flex-row justify-between sticky z-50 items-center mb-2 shadow-gray-400 ">
        <View className="flex-row gap-2 items-center">
          <Pressable onPress={() => router.back()}>
            <FontAwesome6 name="angle-left" size={30} color="black" />
          </Pressable>

          <View className="flex-row gap-2">
            <Avatar imageUrl={avatarUrl} size={40} />
            <View>
              <Text className="text-xl font-semibold">{name}</Text>
              <Text className="text-black/50 text-md">
                Active {activeUer} ago
              </Text>
            </View>
            
          </View>
        </View>

        <View className="flex-row gap-4">
          <FontAwesome6 name="phone" size={20} color="black" />
          <FontAwesome6 name="video" size={20} color="black" />
          <FontAwesome6 name="gear" size={20} color="black" />
        </View>
      </View>
      {/* <View className=" right-0 left-0 ">
        <Text>hello</Text>
        <TextInput
          value={message}
          onChangeText={setmessage}
          placeholder="Message"
          className="p-4 bg-brand"
        />
      </View> */}

      <FlatList
        data={conversation ? conversation : null}
        keyExtractor={(item) => item.id}
        renderItem={chatItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header name={name} avatarUrl={avatarUrl} />}
        className="mt-8"
      />
    </View>
  );
};

export default ChatsScreen;
