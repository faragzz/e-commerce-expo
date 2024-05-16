import { TextInput, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type Categories = "email" | "password";

type Prop = {
  value: string;
  label: string;
  handleChange: (arg0: string) => void;
  category: Categories;
  className?: string;
};

const InputForm = ({
  value,
  label,
  handleChange,
  category,
  className,
}: Prop) => {
  return (
    <View
      className={`flex flex-row bg-inputFormBg p-4 rounded-3xl border-2 border-inputFormBorderColor ${className} `}
    >
      <View className="px-2">
        {category === "password" ? (
          <AntDesign name="lock1" size={24} color="#67666e" />
        ) : (
          <Feather name="mail" size={24} color="#67666e" />
        )}
      </View>
      <TextInput
        value={value}
        onChangeText={handleChange}
        placeholder={label}
        placeholderTextColor="#727179"
        className="flex-1 text-black mr-4  "
      />
    </View>
  );
};

export default InputForm;
