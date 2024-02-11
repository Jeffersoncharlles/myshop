import { PRODUCTS } from '@/utils/data/products'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { useCartStore } from "@/stores/cart-store"

export function useProduct() {
  const cartStore = useCartStore()
  const navigation = useNavigation()
  const { id } = useLocalSearchParams()


  const product = PRODUCTS.filter((item) => item.id === id)[0]

  const handleAddToCart = () => {
    cartStore.add(product)
    navigation.goBack()
  }


  return {
    id,
    product,
    handleAddToCart
  }
}