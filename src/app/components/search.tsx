import { Pressable, Text, TextInput, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
type Prop = {
  value: string;
  onChange: (string) => void;
  onSearch: (string) => void;
};

const Search = ({ value, onChange, onSearch }: Prop) => {
  return (
    <View className="flex flex-row px-8 w-full gap-2 mt-2">
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search"
        placeholderTextColor="#727179"
        className="flex-1 border-2 rounded-xl h-14 pl-4 border-gray-400"
      />
      <Pressable
        onPress={onSearch}
        className="flex bg-black p-3 px-4 rounded-2xl"
      >
        <Octicons name="search" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Search;
