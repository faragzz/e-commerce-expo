import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { DbProducts, Product } from "@/core/type";
import { Image } from "expo-image";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { storeDataObject, getDataObject } from "@/lib/database/actions";
type Prop = {};

const detail = () => {
  const { id, image, title, price, description, category, rate, count } =
    useLocalSearchParams();
  const item: DbProducts = {
    id: id as unknown as number,
    title: title as unknown as string,
    price: price as unknown as number,
    description: description as unknown as string,
    category: category as unknown as string,
    image: image as unknown as string,
    rating: {
      rate: rate as unknown as number,
      count: count as unknown as number,
    },
    quantity: 1,
  };
  return (
    <SafeAreaView>
      <View className="relative flex flex-col items-center bg-white pt-10 px-4 h-screen">
        <Image
          source={image}
          style={{ width: 250, height: 250, marginBottom: 2 }}
        />
        <Text className="font-bold py-4">{"Category : " + category}</Text>
        <Text className="text-xl w">{title}</Text>
        <View className="flex flex-row w-full gap-2 justify-start items-center mt-4">
          <AntDesign name="star" size={24} color="#d58236" />
          <Text className="text-[#d58236] font-bold">{rate}</Text>
          <Text className="ml-2 text-[#d58236] font-bold">
            {"( " + count + " Review )"}
          </Text>
        </View>
        <View className="flex flex-row justify-start mt-2 w-full">
          <Text className="text-[#d58236] font-bold">
            {" Price : $" + price}
          </Text>
        </View>
        <View className="flex flex-col w-full mt-8">
          <Text className="text-xl font-bold">Details</Text>
          <Text className="mt-4">{description}</Text>
        </View>
        <TouchableOpacity
          onPress={async () => {
            console.log("items = ", item);
            try {
              let data: DbProducts[] | null = await getDataObject("products");
              if (!data) {
                data = []; // Initialize data if it's null
              }
              data.push(item);
              await storeDataObject("products", data);
              router.replace("/pages/cart");
            } catch (error) {
              console.error("Error while adding item to cart:", error);
            }
          }}
          className=" absolute bottom-4 bg-black p-4 rounded-xl w-full mt-4"
        >
          <Text className="text-white text-center font-bold text-xl">
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default detail;
