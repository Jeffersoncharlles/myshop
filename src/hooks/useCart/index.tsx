import { useCartStore } from "@/stores/cart-store"
import { formatCurrency } from "@/utils/format-currency"
import { useEffect, useState } from "react"
import * as Location from 'expo-location';
import { ProductProps } from "@/utils/data/products";
import { Alert } from "react-native";


export const useCartPage = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const { products } = useCartStore()


  const total = formatCurrency(products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0))



  // useEffect(() => {
  //   (async () => {

  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  // console.log(location)

  const handleProductRemove = (product: ProductProps) => {
    Alert.alert("Remover", `Deseja remover ${product.title}`, [
      {
        text: "Cancelar"
      },
      {
        text: "Remover",
        onPress: () => { }
      }
    ])

  }

  const handleGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }


  return {
    products,
    total,
    handleProductRemove
  }
}