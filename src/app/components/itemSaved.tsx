import React, { useEffect, useState } from "react";
import { DbProducts, Product } from "@/core/type";
import { FontAwesome5 } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { storeDataObject, getDataObject } from "@/lib/database/actions";

type ItemCardProps = {
  item: DbProducts;
  setRefresh: (number) => void;
};

const ItemSaved = ({ item, setRefresh }: ItemCardProps) => {
  const [quantity, setQuantity] = useState<number>(item.quantity);

  return (
    item && (
      <View className="flex-row py-2 w-full justify-between items-center">
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <View className="flex-col ml-2 w-1/2 overflow-hidden">
          <Text>{item.title}</Text>
          <Text>{"$" + item.price}</Text>
        </View>
        <View className="flex-row ml-2 items-center">
          <TouchableOpacity
            onPress={async () => {
              setQuantity((prev) => (!prev ? 0 : prev - 1));
              const data = await getDataObject("products");
              const index = data.findIndex((it) => it.id === item.id);
              const updatedItem = { ...data[index] };
              updatedItem.quantity =
                updatedItem.quantity === 0 ? 0 : updatedItem.quantity - 1;
              const updatedData = [...data];
              updatedData[index] = updatedItem;
              await storeDataObject("products", updatedData);
            }}
            style={{ padding: 8 }}
          >
            <Text className="text-xl font-bold">-</Text>
          </TouchableOpacity>
          <Text className="text-lg">{quantity}</Text>
          <TouchableOpacity
            onPress={async () => {
              setQuantity((prev) => prev + 1);
              const data = await getDataObject("products");
              const index = data.findIndex((it) => it.id === item.id);
              const updatedItem = { ...data[index] };
              updatedItem.quantity = updatedItem.quantity + 1;
              const updatedData = [...data];
              updatedData[index] = updatedItem;
              await storeDataObject("products", updatedData);
            }}
            style={{ padding: 8 }}
          >
            <Text className="text-xl font-bold">+</Text>
          </TouchableOpacity>
        </View>
        <View className="ml-1">
          <TouchableOpacity
            onPress={async () => {
              const data: DbProducts[] = await getDataObject("products");
              const itemDelete = data.filter((it) => it.id !== item.id);
              await storeDataObject("products", itemDelete);
              setRefresh((prev) => prev + 1);
            }}
          >
            <FontAwesome5 name="trash" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

export default ItemSaved;
