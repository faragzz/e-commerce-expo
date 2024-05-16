import { ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Skeleton } from "moti/skeleton";
import { fetchProducts } from "@/lib/fetch";
import { Product } from "@/core/type";
import CardProduct from "./cardProduct";

const Products = ({ data }: { data?: Product[] }) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(data == null ? true : false);
    console.log("is loading = " + loading);
  }, [data]);
  return (
    <ScrollView showsVerticalScrollIndicator className="flex-grow p-2">
      <View className="flex flex-row justify-between flex-wrap gap-2 pb-64">
        {data.map((item, index) => {
          return <CardProduct key={index} item={item} loading={loading} />;
        })}
      </View>
    </ScrollView>
  );
};

export default Products;
