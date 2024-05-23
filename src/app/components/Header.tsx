import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
const Header = () => {
  return (
    <View className="flex flex-row justify-between items-center p-4 px-4 pt-4">
      <Text className="font-bold text-2xl">Good Morning!</Text>
      {/* <Ionicons
        name="person-sharp"
        size={24}
        color="black"
        className="bg-gray-300 p-2 rounded-full"
      />
       */}
      <TouchableOpacity
        onPress={() => router.push("/pages/cart")}
        className="p-3 bg-gray-300 rounded-full"
      >
        <FontAwesome name="shopping-cart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
