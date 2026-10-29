import { Image } from "expo-image";

interface AvatarProps {
  imageUrl: string;
  size: number;
}

const Avatar = ({ imageUrl, size }: AvatarProps) => {
  return (
    <Image
      source={imageUrl}
      style={{ width: size, height: size, borderRadius: size / 2 }}
      contentFit="cover"
    />
  );
};

export default Avatar;
