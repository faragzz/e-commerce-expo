import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import Logo from "../../assets/logo2.png";
import InputForm from "../components/InputForm";
import FormButton from "../components/button";

const login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  return (
    <SafeAreaView>
      <View className="relative flex flex-col items-center h-screen w-full p-4">
        <View className="pt-10">
          <Image
            source={Logo}
            placeholder="Logo"
            contentFit="cover"
            transition={1000}
            style={{ width: 200, height: 100 }}
          />
        </View>
        <View className="mt-12 flex flex-col items-center w-full">
          <Text className="text-gray-600 text-2xl font-semibold">
            Login to your Account
          </Text>

          <InputForm
            label="Email"
            handleChange={setEmail}
            category="email"
            value={email}
            className="mt-8"
          />
          <InputForm
            label="Password"
            handleChange={setPassword}
            category="password"
            value={password}
            className="mt-8"
          />
          <FormButton
            onClick={() => router.replace("/pages/home")}
            label="Login"
            className="mt-10"
          />
        </View>
        <View className="absolute flex flex-row gap-2 bottom-10">
          <Text className="">Don't Have an Account?</Text>
          <Link href={"/pages/signUp"} className="text-green-600">
            Sign Up
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
