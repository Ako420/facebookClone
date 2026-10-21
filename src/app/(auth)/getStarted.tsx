import { View, Text } from 'react-native'
import { Image } from 'expo-image';
import FillButton from '@/components/FillButton';
import {useRouter} from 'expo-router';
import Button from '@/components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';

const GetStartedSreen = () => {
   const router = useRouter();
   return (
          <SafeAreaView className="flex-1 justify-between">
      <View className=" ">
        <Image 
          source={require('../../../assets/images/signup.png')} 
          style={{ width: '100%', height: 300 }} 
          contentFit="contain" 
        />
        <View className="m-2 p-2">
          <Text className="font-bold text-3xl mt-4">
            Get Started on Facebook with a Meta Account
          </Text>
          <Text className="text-xl mt-2 text-gray-600">
            A Meta Account lets you access Meta apps and devices, such as Facebook, easily and securely.
          </Text>
        </View>
      </View>

    
      <View className=" flex-col gap-2 w-full px-1">
        <View className="">
          <FillButton title="Get Started" handlePress={() => router.push('/(auth)/register')} />
        </View>
        <View className="">
          <Button title="Find my account" handlePress={() => router.push('/(auth)/recoverAccount')} />
        </View>
      </View>
    </SafeAreaView>
        );

}

export default GetStartedSreen