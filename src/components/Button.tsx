import { Pressable, Text, View } from "react-native";

interface buttonProps {
  title: string;
  handlePress: () => void;
}

const Button = ({ title, handlePress }: buttonProps) => {
  return (
    <View className=" justify-end m-4">
      <Pressable className="" onPress={handlePress}>
        <Text className="text-brand text-center border border-brand bg-canvas p-3 w-full mx-2 rounded-full">
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default Button;
