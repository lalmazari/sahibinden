import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-poppins text-lg">This is Poppins</Text>
      <Text className="font-opensans text-lg">This is Open Sans</Text>
      <Text className="font-inter text-lg">This is Inter</Text>
    </View>
  );
}
