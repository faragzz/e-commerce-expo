import { Pressable, Text, View } from "react-native";
import React from "react";

type Prop = {
  onClick: () => void;
  label: string;
  className?: string;
};

const FormButton = ({ onClick, label, className }: Prop) => {
  return (
    <Pressable
      onPress={onClick}
      className={`flex flex-row justify-center bg-green-600 py-4 rounded-2xl w-full ${className}`}
    >
      <Text className="text-white font-bold text-2xl">{label}</Text>
    </Pressable>
  );
};

export default FormButton;
