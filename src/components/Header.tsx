import { View, Text } from 'react-native'
import Icon from './ui/Icon';


const Header = () => {
  return (
    <View className="flex-row justify-between m-2">
<Text className="text-brand text-4xl font-bold">
            facebook
        </Text>
        <View className="flex-row  gap-2 ">
            <Icon name="plus" size={25} color="black" />
             <Icon name="magnifying-glass" size={25} color="black" />
              <Icon name="bars" size={25} color="black" />
        </View>
        </View>
  )
}

export default Header