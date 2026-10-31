import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video'; 
import { ReelData } from "@/types/reel"; 

const { height } = Dimensions.get('window');


interface VideoItemProps {
  item: ReelData;
  isActive: boolean;
}

const VideoItem = ({ item, isActive }: VideoItemProps) => {
  const player = useVideoPlayer(item.videoUrl, (player) => {
    player.loop = true;
  });

  useEffect(() => {
    if (isActive) {
      player.play();
    } else {
      player.pause();
    }
  }, [isActive, player]);

  return (
    <VideoView
      player={player}
      fullscreenOptions={{ enable: false }}
      className="w-full"
      style={{ height }} 
    />
  );
}; 

export default VideoItem;