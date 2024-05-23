import { DbProducts, Product } from "@/core/type";
import AsyncStorage from "@react-native-async-storage/async-storage";

//db for object data

export const storeDataObject = async (key: string, value: DbProducts[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getDataObject = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

//======================================================================================

//db for string data

const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("my-key", value);
  } catch (e) {
    console.log(e);
  }
};

const getData = async (key: string, value: string) => {
  try {
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    console.log(e);
  }
};
