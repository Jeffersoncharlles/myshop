import { Pressable, PressableProps, Text } from "react-native";
import { clsx } from 'clsx'

type CategoryProps = PressableProps & {
  title: string
  isSelected?: boolean
}

export function CategoryButton({ title, isSelected, ...rest }: CategoryProps) {
  return (
    <Pressable
      {...rest}
      className={
        clsx("bg-neutral-700 px-4 justify-center rounded-md h-10", isSelected && "border border-orange-400")
      }
    >
      <Text className="text-orange-50 font-subtitle text-sm">{title}</Text>
    </Pressable>
  )
}