import { CATEGORIES } from "@/utils/data/products"
import { useState } from "react"


export const useHome = () => {

  const [category, setCategory] = useState(CATEGORIES[0])

  function handleCategorySelect(selectedCategory: string) {
    setCategory(selectedCategory)
  }



  return {
    category,
    handleCategorySelect
  }
}