import { View, Pressable, PressableProps, Text } from "react-native";

interface CategoryProps {
  title: string
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected }: CategoryProps) {
  return (
    <Pressable className="bg-neutral-800 px-4 justify-center rounded-md">
      <Text className="text-orange-400 ">{title}</Text>
    </Pressable>
  )
}