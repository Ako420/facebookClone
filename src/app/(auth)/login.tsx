import FillButton from "@/components/FillButton";
import { useAuthStore } from "@/stores/AuthStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Button from "../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, loginError } = useAuthStore();
  const router = useRouter();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <SafeAreaView className="flex-1 justify-between ">
      
      <View className=" flex-1 justify-center items-center m-4 gap-2">
        <Text className="text-6xl font-extrabold text-brand-pressed text-center bg-canvas rounded-full border border-gray-300  h-20 w-20 p-4">
          f
        </Text>
        {loginError && <Text className="text-danger-light"> {loginError}</Text>}
        <TextInput
          className="w-full border border-gray-300 rounded-xl p-4 m-4 "
          placeholder="mobile number or email address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-full border border-gray-300 rounded-xl p-4 mx-4"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <FillButton title="login" handlePress={handleLogin} />

        <Pressable>
          <Text className="text-center mt-2">Forgotten password?</Text>
        </Pressable>

       
      </View>
      <View className="">
       <Button
          title="Create new acoount"
          handlePress={() => router.push("/(auth)/getStarted")}
        />
        </View>
    </SafeAreaView>
  );
};

export default Login;
