import { useState, useCallback } from 'react';
import { FlatList, View, Dimensions, ViewToken, ListRenderItemInfo } from "react-native";
import { REELS } from "@/data/reels";
import { ReelData } from "@/types/reel";
import VideoItem from '@/components/reels/VideoItem'; 

const { height } = Dimensions.get('window');


const VIEWABILITY_CONFIG = {
  itemVisiblePercentThreshold: 70,
};

const ReelsScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== null) {
      setActiveIndex(viewableItems[0].index);
    }
  }, []);

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<ReelData>) => (
    <VideoItem 
      item={item} 
      isActive={activeIndex === index} 
    />
  ), [activeIndex]);

  return (
    <View className="flex-1 bg-black justify-center px-4 py-2">
      <FlatList
        data={REELS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled 
        showsVerticalScrollIndicator={false}
        viewabilityConfig={VIEWABILITY_CONFIG}
        onViewableItemsChanged={onViewableItemsChanged}
        snapToInterval={height} 
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default ReelsScreen;