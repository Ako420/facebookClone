import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
    Alert,
    Modal,
    Platform,
    Pressable,
    Text,
    TextInput,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FillButton from "../FillButton";
import { FontAwesome6 } from '@expo/vector-icons'


type Gender = "male" | "female" | "other";

const MultiStepModal = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [dateofBirth, setdateOfBirth] = useState<Date | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [gender, setGender] = useState<Gender | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const totalStep = 6;

  const handleNext = (): void => {
    // if (!firstName || !lastName) {
    //   setError("Enter first and SurName");
    //   return;
    // }
    // if (!dateofBirth) {
    //   setError("Enter your age");
    //   return;
    // }
    // if (!gender) {
    //   setError("select your gender");
    //   return;
    // }

    // if (!email.trim()) {
    //   setError("senter valid email");
    //   return;
    // }

    // if (!password) {
    //   setError("enter password");
    //   return;
    // }

    setError(null);
    if (currentStep < totalStep) setCurrentStep(currentStep + 1);
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    // Hide picker on Android after selection
    if (Platform.OS === "android") {
      setShowPicker(false);
    }

    if (selectedDate) {
      setdateOfBirth(selectedDate);
    }
  };

  const handlePrevious = (): void => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const registerStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <View className="m-4">
            <Text className="font-bold text-xl ">What&apos;s your name?</Text>
            <Text className="text-sm">Enter the you use in real Life.</Text>

            <View className="flex-row w-90 gap-2 my-4">
              <TextInput
                placeholder="first Name"
                value={firstName}
                onChangeText={setFirstName}
                autoFocus={true}
                className="border p-4 border-gray-300 w-[50%] rounded-xl"
              />
              <TextInput
                placeholder="surName"
                value={lastName}
                onChangeText={setLastName}
                className="border border-gray-300 p-4 w-[50%] rounded-xl"
              />
            </View>
            {error && <Text className="text-danger-light mb-2"> {error}</Text>}
            <FillButton title="next" handlePress={handleNext} />
          </View>
        );

      case 2:
        return (
          <View className="m-4 gap-2">
            <Text className="font-bold text-xl ">
              What&apos;s your date of birth?
            </Text>
            <Text className="text-base leading-6 ">
              <Text className="text-md">
                Choose your date of birth. you can always make this private
                later.
              </Text>
              <Text className="text-md text-brand italic">
                why do i need to provide my date of birth?
              </Text>
            </Text>
            <View className="w-full pt-2">
              <Text className="text-sm font-medium text-slate-700 mb-1">
                Date of Birth
              </Text>

              <Pressable
                onPress={() => setShowPicker(true)}
                className="h-14 w-full bg-canvas border border-gray-300 rounded-xl px-4 justify-center "
              >
                <Text
                  className={dateofBirth ? "text-slate-900" : "text-slate-400"}
                >
                  {dateofBirth
                    ? dateofBirth.toLocaleDateString()
                    : "Select your birth date"}
                </Text>
              </Pressable>

              {showPicker && (
                <DateTimePicker
                  value={dateofBirth || new Date(2000, 0, 1)}
                  mode="date"
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  maximumDate={new Date()}
                  onChange={handleDateChange}
                />
              )}
            </View>
            {error && <Text className="text-danger-light mb-2"> {error}</Text>}
            <FillButton title="next" handlePress={handleNext} />
          </View>
        );

      case 3:
        return (
          <View>
            <Text className="font-bold text-xl ">What&apos;s your gender?</Text>
            <Text className="text-sm">
              You can change who sees your gender on your profile.
            </Text>
            <View className="flex-col m-4 p-4  border border-gray-300 rounded-2xl ">
              <Pressable
                className="flex-row justify-between px-2 py-3 "
                onPress={() => setGender("female")}
              >
                <Text className="text-md text">Female</Text>
                {gender === "female" ? (
                  <View className="w-6 h-6 rounded-full border-2 border-brand bg-white p-2 justify-center items-center">
                    <View className=" w-4 h-4 rounded-full bg-brand p-2"></View>
                  </View>
                ) : (
                  <View className="w-6 h-6 rounded-full border-2 p-2 border-gray-400  bg-canvas" />
                )}
              </Pressable>

              <Pressable
                className="flex-row justify-between px-2 py-3 border-t border-gray-300"
                onPress={() => setGender("male")}
              >
                <Text className="text-md text">Male</Text>
                {gender === "male" ? (
                  <View className="w-6 h-6 rounded-full border-2 border-brand bg-white p-2 justify-center items-center">
                    <View className=" w-4 h-4 rounded-full bg-brand p-2" />
                  </View>
                ) : (
                  <View className="w-6 h-6 rounded-full border-2 p-2 border-gray-400  bg-canvas"></View>
                )}
              </Pressable>

              <Pressable
                className="flex-row justify-between px-2 py-3 items-center border-t border-gray-300"
                onPress={() => {
                  setModalVisible(true);
                  setGender("other");
                }}
              >
                <View className="leading-6 flex-col items-start w-[80%]">
                  <Text className="text-md text">More options</Text>
                  <Text className="text-gray-400">
                    Selcet &quot;More options to choose another gender or if
                    you&apos;d rather not say
                  </Text>
                </View>

                {gender === "other" ? (
                  <View className="w-6 h-6 rounded-full border-2 border-brand bg-white p-2 justify-center items-center">
                    <View className=" w-4 h-4 rounded-full bg-brand p-2" />
                  </View>
                ) : (
                  <View className="w-6 h-6 rounded-full border-2 p-2 border-gray-400  bg-canvas"></View>
                )}
              </Pressable>
              {gender === "other" && (
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View>
                    <View>
                      <Text>Hello World!</Text>
                      <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text>Hide Modal</Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
              )}
            </View>
            {error && <Text className="text-danger-light mb-2"> {error}</Text>}
            <FillButton title="Next" handlePress={handleNext} />
          </View>
        );

      case 4:
        return (
          <View className=" justify-start items-center m-4 gap-2">
            <View className="w-full items-start">
              <Text className="font-bold text-2xl ">
                What&apos;s your Email
              </Text>
              <Text className="text-xl font-light ">
                Enter the enail address on which you can be contacted.No one
                will see this on your profile
              </Text>
            </View>

            <TextInput
              className="w-full border border-gray-300 rounded-xl p-4 m-4 "
              placeholder=" email address"
              value={email}
              autoFocus={true}
              onChangeText={setEmail}
            />
            {error && <Text className="text-red-600">{error}</Text>}

            <View className="w-full items-start gap-1">
              <Text>you may receive email notification from us</Text>
              <Text className="text-brand">Learn more</Text>
            </View>

            <FillButton title="Next" handlePress={handleNext} />
            <Pressable
              className="w-full items-center rounded-3xl bg-gray-200 px-4 py-3"
              onPress={() => console.log("coming")}
              accessibilityRole="button"
            >
              <Text className="text-label ">Sign up with Phone number</Text>
            </Pressable>
          </View>
        );
      case 5:
        return (
          <View className=" justify-start items-center m-4 gap-2">
            <View className="w-full items-start">
              <Text className="font-bold text-2xl ">Create a password</Text>
              <Text className="text-[16px] font-light ">
                Create a password with at least six letters or numbers it should
                be something that others can&apos;t guess.
              </Text>
            </View>

            <TextInput
              className="w-full border border-gray-300 rounded-xl p-4 m-4 "
              placeholder="password"
              value={password}
              autoFocus={true}
              onChangeText={setPassword}
            />
            {error && <Text className="text-red-600">{error}</Text>}

            <View className="w-full items-start gap-1">
              <Text>
                Remember login info.{" "}
                <Text className="text-brand">Learn more</Text>
              </Text>
            </View>

            <FillButton title="Next" handlePress={handleNext} />
            
          </View>
        );
      default:
        return null;
    }
  };

  return <SafeAreaView className="flex-1">
    {
      currentStep > 1 && (
        <Pressable className="mb-2 ml-2" onPress={handlePrevious}>
      <FontAwesome6 name="arrow-left" size={25} color="#0000" />
     {/* <FontAwesome6  name='github' size = {20} color="#5eff" /> */}
    </Pressable>
      )
    }
    
    <View>
{registerStep()}
  </View>
    
    </SafeAreaView>;
};

export default MultiStepModal;
