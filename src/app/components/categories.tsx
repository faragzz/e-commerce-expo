import { Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";

const Categories = ({ filter }: { filter: (arg0: number) => void }) => {
  const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelry",
  ];
  const [categoryIndex, setCategoryIndex] = useState<number>(0);
  return (
    <ScrollView horizontal className="px-4 mt-2 py-2 min-h-16">
      {categories.map((category, index) => {
        const styleFocused = index === categoryIndex ? "bg-black" : "";
        const textColor = index === categoryIndex ? "text-white" : "";
        return (
          <View
            key={index}
            className={`border-2 border-gray-300 py-2 px-7 rounded-2xl gap mr-4 ${styleFocused}`}
          >
            <Pressable
              onPress={() => {
                setCategoryIndex(index);
                filter(index);
              }}
            >
              <Text className={textColor}>{category}</Text>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Categories;
