import { useCartStore } from "@/stores/cart-store"
import { formatCurrency } from "@/utils/format-currency"
import { useEffect, useState } from "react"
import * as Location from 'expo-location';
import { ProductProps } from "@/utils/data/products";
import { Alert, Linking } from "react-native";
import { useNavigation } from "expo-router";


const PHONE = "5562998126838"

export const useCartPage = () => {
  const navigation = useNavigation()
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState('');
  const { products, remove, clear } = useCartStore()


  const total = formatCurrency(products.reduce((total, product) => {
    return total + product.price * product.quantity
  }, 0))


  const handleProductRemove = (product: ProductProps) => {
    Alert.alert("Remover", `Deseja remover ${product.title}`, [
      {
        text: "Cancelar"
      },
      {
        text: "Remover",
        onPress: () => remove(product.id)
      }
    ])

  }

  const handleGetLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão de acesso localização foi negada!');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    Alert.alert("Localização", `Enviar Localização atual ainda e necessário colocar o endereço `,)

    console.log(location)
  }

  const handleOrder = () => {
    if (address.trim().length === 0) {
      return Alert.alert("Pedido", "Informe o endereço")
    }

    const productsCart = products.map((product) => `\n ${product.quantity} ${product.title}`).join("")
    // let locText = ""
    // if (location) {
    //   locText = "Latitude: " + location.coords.latitude + "\nLongitude: " + location.coords.longitude + "\nPlease send this message"

    // }

    const message = `
      🍔 NOVO PEDIDO
      \n Entregar em: ${address}

      ${productsCart}

      \n Valor total: ${total}
    `

    if (message) {
      Linking.openURL(`https://api.whatsapp.com/send?phone=${PHONE}&text=${message}`)
      clear()
      navigation.goBack()
    }

    console.log(message)
  }


  return {
    products,
    total,
    handleProductRemove,
    handleGetLocation,
    handleOrder,
    setAddress
  }
}