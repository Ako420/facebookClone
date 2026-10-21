import { Pressable, Text } from "react-native";

interface fillButtonProps {
  title: string;
  handlePress: () => void;
}

const FillButton = ({ title, handlePress }: fillButtonProps) => {
  return (
    <Pressable
      className="w-full items-center rounded-xl bg-brand px-4 py-3 active:bg-brand-pressed"
      onPress={handlePress}
      accessibilityRole="button"
    >
      <Text className="text-label font-bold text-white">{title}</Text>
    </Pressable>
  );
};

export default FillButton;