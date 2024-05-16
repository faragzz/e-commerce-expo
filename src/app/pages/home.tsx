import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import Search from "../components/search";
import Categories from "../components/categories";
import Products from "../components/Products";
import { fetchProducts } from "@/lib/fetch";
import { Product } from "@/core/type";

const home = () => {
  const [search, setSearch] = useState<string>();
  const [products, setProducts] = useState<Product[] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts<Product[]>(
          "https://fakestoreapi.com/products"
        );
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const skeletonData = Array.from({ length: 20 }).map(() => null);
  return (
    <SafeAreaView>
      <Header />
      <Search value={search} onChange={setSearch} onSearch={() => {}} />
      <Categories />
      <Products data={products ?? skeletonData} />
    </SafeAreaView>
  );
};

export default home;
