import CreatePost from '@/components/home/creatPost';
import { StoriesSection } from '@/components/story/Story';

import {View} from 'react-native'



const home = () => {
 
  return (
     <View>
    <CreatePost />
      <StoriesSection />


     </View>
    
  )
}

export default home