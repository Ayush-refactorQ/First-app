import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import images from "../constants/images";

export default function App() {
  return (
    <>
      <SafeAreaView className="flex flex-1 justify-center items-center bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="justify-center items-center min-h-[90vh]">
            <Image
              source={images.logo}
              className="h-[130px] w-[90px]"
              resizeMode="contain"
            />
            <Image
              source={images.cards}
              className="max-w-[400px] h-[300px]"
              resizeMode="contain"
            />

            <View className="mt-5 relative">
              <Text className="text-3xl text-white font-bold text-center">
                Discover Endless Possibilities with{" "}
                <Text className="text-secondary-200">Aora</Text>
              </Text>
              <Text className="text-sm font-pregular text-center mt-7 text-gray-100">
                Where creativity meets innovations: embark on a journey of
                limitless exploration with Aora
              </Text>
            </View>
            <View className="w-full px-6">
              <CustomButton
                title="Continue with email"
                handlePress={() => router.push("sign-in")}
                containerStyle="w-full mt-7"
              />
            </View>
          </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" />
      </SafeAreaView>
    </>
  );
}
