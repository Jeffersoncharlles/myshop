import { CATEGORIES, MENU } from "@/utils/data/products"
import { useRef, useState } from "react"
import { SectionList } from "react-native"


export const useHome = () => {
  const [category, setCategory] = useState(CATEGORIES[0])

  const sectionListRef = useRef<SectionList>(null)

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
    sectionListRef
  }
}