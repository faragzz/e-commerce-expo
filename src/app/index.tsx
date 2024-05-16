import { Link, router } from "expo-router";
import React, { useEffect } from "react";
import { View,Text } from "react-native";
import { Image } from "expo-image";
import Logo from "../assets/logo.png";

export default function Page() {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Navigate to the desired screen after 1 second
      router.push('/pages/login'); // Replace '/home' with your target route
    }, 2000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="flex flex-1 bg-yellow-100 justify-center items-center">
      <View className="bg-white p-16 rounded-full">
        <Image
          source={Logo}
          placeholder="Logo"
          contentFit="cover"
          style={{ width: 150, height: 150 }}
        />
      </View>
      <Text className="absolute bottom-12">Developed by Ahmed Khaled</Text>
    </View>
  );
}
