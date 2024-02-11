import { useCartStore } from "@/stores/cart-store"
import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products"
import { useRef, useState } from "react"
import { SectionList } from "react-native"



export const useHome = () => {
  const cartStore = useCartStore()
  const [category, setCategory] = useState(CATEGORIES[0])
  const cartQuantityItems = cartStore.products.reduce((total, product) => {
    return total + product.quantity
  }, 0)


  const sectionListRef = useRef<SectionList<ProductProps>>(null)

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)

    const sectionIndex = CATEGORIES.findIndex((category) => category === selectedCategory)

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0
      })
    }
  }




  return {
    category,
    handleCategorySelect,
    CATEGORIES,
    MENU,
    sectionListRef,
    cartQuantityItems
  }
}