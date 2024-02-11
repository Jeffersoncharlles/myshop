import { PRODUCTS } from '@/utils/data/products'
import { useLocalSearchParams } from 'expo-router'

export function useProduct() {
  const { id } = useLocalSearchParams()

  const product = PRODUCTS.filter((item) => item.id === id)[0]

  return {
    id,
    product,
  }
}