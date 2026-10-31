import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import '../../global.css'
import { VideoView } from 'expo-video';
import {Image } from 'expo-image'
import { cssInterop } from 'nativewind';

// Map NativeWind's className to the style prop of VideoView
 cssInterop(VideoView, {
  className: 'style',
}
);

cssInterop(Image, {
  className: 'style',
});

export default function RootLayout() {



  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
