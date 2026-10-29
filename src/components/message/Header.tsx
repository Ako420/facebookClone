import { Pressable, Text, View } from "react-native";
import Avatar from "../ui/Avatar";

interface HeaderProp{
   
    name:string
     avatarUrl:string,
}
 
 
export const Header = ({name,avatarUrl}:HeaderProp) => {
  return(
    <View className="justify-center items-center gap-y-1.5">
  <Avatar imageUrl={avatarUrl} size={80} />
  <Text className="text-2xl font-bold">{name}</Text>
  <Text className="text-gray-800 text-xl ">Friends on Facebook</Text>
  <Pressable  className="bg-gray-300 p-3 rounded-2xl">
    <Text className="text-md font-bold">View Profile</Text>
  </Pressable>
</View>
  )
}

