import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { Product } from "@/core/type";
import { AntDesign } from "@expo/vector-icons";
import { Skeleton } from "moti/skeleton";
import { Link } from "expo-router";

const SkeletonCommonProps = {
  colorMode: "light",
  backgroundColor: "#D4D4D4",
  transition: { type: "timing", duration: 1 },
  startColor: "#f0f0f0",
  endColor: "#e0e0e0",
  highlightColor: "#fafafa",
} as const;

const CardProduct = ({
  item,
  loading,
}: {
  item: Product;
  loading: boolean;
}) => {
  return (
    <View className="flex flex-col justify-center items-center w-48 bg-cardBackGround p-4 rounded-xl">
      <Skeleton
        show={loading}
        width={150}
        height={150}
        {...SkeletonCommonProps}
      >
        {item && (
          <Link
            href={{
              pathname: "/pages/detail",
              params: {
                id: item.id,
                image: item.image,
                title: item.title,
                price: item.price,
                description: item.description,
                category: item.category,
                rate: item.rating.rate,
                count: item.rating.count,
              },
            }}
          >
            <Image
              source={item.image}
              style={{ width: 150, height: 150, marginBottom: 2 }}
            />
          </Link>
        )}
      </Skeleton>
      <View className="pt-2" />
      <Skeleton show={loading} width={125} {...SkeletonCommonProps}>
        {item && <Text className="text-xs">{item.title}</Text>}
      </Skeleton>

      <View className="flex flex-row justify-between items-center px-4 w-full pt-2 ">
        <Skeleton show={loading} width={50} {...SkeletonCommonProps}>
          {item && <Text>{"$" + item.price.toFixed(2)}</Text>}
        </Skeleton>
        <Skeleton show={loading} width={50} {...SkeletonCommonProps}>
          {item && (
            <View className="flex flex-row gap-1 items-center">
              <AntDesign name="star" size={24} color="#d58236" />
              <Text>{item.rating.rate}</Text>
            </View>
          )}
        </Skeleton>
      </View>
    </View>
  );
};

export default CardProduct;
