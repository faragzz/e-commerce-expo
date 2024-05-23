import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DbProducts, Product } from "@/core/type";
import ItemSaved from "../components/itemSaved";
import { storeDataObject, getDataObject } from "@/lib/database/actions";

const cart = () => {
  const [itemStored, setItemStored] = useState<DbProducts[]>([]); // Changed to an empty array
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [refresh, setFresh] = useState<number>(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data: DbProducts[] | null = await getDataObject("products");
        console.log("data get =", data);

        if (data) {
          setItemStored(data);
          const total = data.reduce((acc, item) => acc + item.price, 0);
          setTotalPrice(total);
        } else {
          setItemStored([]); // Set itemStored to empty array if data is null
          setTotalPrice(0); // Reset total price
        }
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [refresh]);

  return (
    <SafeAreaView>
      <View className="flex flex-col w-full p-8">
        <Text className="mt-4 text-5xl font-bold">My Cart</Text>
        <ScrollView showsVerticalScrollIndicator className="flex-grow p-2">
          {itemStored.map((item, index) => (
            <ItemSaved key={index} item={item} setRefresh={setFresh} />
          ))}
        </ScrollView>
        <View className="flex flex-row w-full justify-between items-center">
          <Text>Total Amount</Text>
          <Text>{"$" + totalPrice}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default cart;
