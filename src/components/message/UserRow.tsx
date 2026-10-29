
import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import { User } from "@/types/user";

interface userDataPros{
    user:User[]
}

const UserRow = ({user} : userDataPros) => {

    const renderItem: ListRenderItem<User> = ({ item }) => {
    return (
  <View className="">
    <Pressable className="m-2 items-center">
    <View className="">
        {item.isOnline && <View className="border-1.5 border-white/30 absolute bottom-0 right-5"><View className="bg-green-500 size-2.5 rounded-full"/></View>
        }
        <View className="">
<Image source={item.avatarUrl} style={{width:60, height:60 ,borderRadius:30}} contentFit="cover" />
        </View>
 
    </View>
       
        <Text>{item.name.split(/\s+/)[0]}</Text>
    </Pressable>
    
  </View>
    )
};


  return (
     <FlatList 
        data={user}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
         showsHorizontalScrollIndicator={false}
        className=" px-2"
        />
  )
}

export default UserRow