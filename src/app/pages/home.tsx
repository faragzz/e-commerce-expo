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
  const [filtered, setFiltered] = useState<Product[] | null>(null);
  const [filter, setFilter] = useState<number>(0);
  //0 All,  1 men's clothing, 2 women's clothing,  3 electronics, 4 jewelery
  const categories = [
    "All",
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery",
  ];

  useEffect(() => {
    if (products) {
      setFiltered(
        products.filter(
          (data) => data.category === categories[filter] || filter === 0
        )
      );
    }
  }, [filter, products]);

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

  const onPressSearch = () => {
    setFiltered(
      products.filter((data) => data.title === search || search === "")
    );
  };

  const skeletonData = Array.from({ length: 20 }).map(() => null);
  return (
    <SafeAreaView>
      <Header />
      <Search value={search} onChange={setSearch} onSearch={onPressSearch} />
      <Categories filter={setFilter} />
      <Products data={filtered ?? products ?? skeletonData} />
    </SafeAreaView>
  );
};

export default home;
