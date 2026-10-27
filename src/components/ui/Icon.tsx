import { FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";
interface IconProp {
  name: string;
  size: number;
  color: string;
}

const Icon = ({ name, size, color }: IconProp) => {
  return (
    <View className="w-[40px] h-[40px] bg-gray-200  rounded-full justify-center items-center"> 
      <FontAwesome6 name={name} size={size} color={color}  />
      
    </View>
  );
};


export default Icon;
