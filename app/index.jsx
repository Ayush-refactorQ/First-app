import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <>
      <View className="flex flex-1 justify-center items-center">
        <Text className="text-4xl font-pbold">Hello World</Text>
        <StatusBar style="auto" />
        <Link className="text-blue-500 font-medium text-base" href="/home">
          Go to home
        </Link>
      </View>
    </>
  );
}
