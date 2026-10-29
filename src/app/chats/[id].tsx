import { useLocalSearchParams, Stack } from 'expo-router';
import ChatsScreen from '@/screens/Chats';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chats = () => {
  const {id, name, avatarUrl} = useLocalSearchParams<{ id: string; name: string; avatarUrl:string}>();
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: name || `Chat #${id}` }} />
     <ChatsScreen id={id}  name={name} avatarUrl={avatarUrl}/>
    </SafeAreaView>
  )
}

export default Chats