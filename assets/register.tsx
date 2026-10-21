import MultiStepModal from "@/components/auth/MultiStepModal";
import { Pressable, View,Text } from "react-native";


const register = () => {
    
  return (
    <View>
 {/* <MultiStepModal  visible= {false} /> */}
 <Pressable >
  <Text className="font-extrabold">
    Already have an account
  </Text>
 </Pressable>
    </View>
   
  )
}

export default register