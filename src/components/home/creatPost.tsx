
import { View,Text, Pressable } from "react-native";
import Avatar from "../ui/Avatar";
import { Image } from "expo-image";

const CreatePost = () => {


  return (
    <View className="flex-row w-full gap-2 m-2 items-center">
      <Avatar imageUrl={require("../../../assets/images/icon.png")} size={45} />
      <Pressable className="w-[70%] bg-gray-300 p-4 rounded-full">
        <Text className="text-xl text-gray-500 ">What&apos;s on you mind</Text>
      </Pressable>
      <View className="flex-col items-center">
        <Image source={require('../../../assets/images/signup.jpg')} style={{width:25, height:30}} />
        <Text>Photo</Text>
      </View>
    </View>
  );
};

export default CreatePost;
