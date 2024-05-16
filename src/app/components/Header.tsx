import { Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center p-4 px-4 pt-4">
      <Text className="font-bold text-2xl">Good Morning!</Text>
      <Ionicons
        name="person-sharp"
        size={24}
        color="black"
        className="bg-gray-300 p-2 rounded-full"
      />
    </View>
  );
};

export default Header;
