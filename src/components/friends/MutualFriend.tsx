import { Image } from "expo-image";
import { Text, View } from "react-native";

const MutualFriendsRow = ({
  count,
  avatars,
}: {
  count: number;
  avatars: string[];
}) => {
  if (count === 0) return null;

  return (
    <View className="flex-row gap-1.5 items-center">
      <View className="flex-row">
        {avatars.slice(0, 3).map((avatarUri, index) => (
          <Image
            key={index}
            source={{ uri: avatarUri }}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              borderWidth: 1.5,
              borderColor: "#FFFFFF",
              marginLeft: index > 0 ? -8 : 0,
              zIndex: avatars.length - index,
            }}
          />
        ))}
      </View>

      <Text className="text-lg" numberOfLines={1}>
        {count} {count === 1 ? "mutual friend" : "mutual friends"}
      </Text>
    </View>
  );
};

export default MutualFriendsRow;
