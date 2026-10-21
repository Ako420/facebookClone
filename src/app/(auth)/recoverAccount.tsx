import Button from "@/components/Button";
import FillButton from "@/components/FillButton";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RecoverAccount = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const handleRecover = () => {
    if (!email.trim()) setError("email or Phone required");
    console.log("Coming soon");
  };

  return (
    <SafeAreaView className="flex-1 justify-between ">
      <View className=" justify-start items-center m-4 gap-2">
        <View className="w-full items-start">
          <Text className="font-bold text-xl ">Find your account</Text>
          <Text className="text-sm">Enter your email</Text>
        </View>

        <TextInput
          className="w-full border border-gray-300 rounded-xl p-4 m-4 "
          placeholder=" email address"
          value={email}
          autoFocus={true}
          onChangeText={setEmail}
        />
        {error && <Text className="text-red-600">{error}</Text>}

        <FillButton title="continue" handlePress={handleRecover} />
      </View>
      <View className="">
        <Button
          title="Create new acoount"
          handlePress={() => router.push("/(auth)/register")}
        />
      </View>
    </SafeAreaView>
  );
};

export default RecoverAccount;
