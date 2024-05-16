import { Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const login = () => {
  const {id} = useLocalSearchParams();
  return (
    <View>
      <Text>Login page {id}</Text>
    </View>
  );
};

export default login;
