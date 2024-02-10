import { ActivityIndicator, View } from "react-native";
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-800">
      <ActivityIndicator color={colors.orange[500]} />
    </View>
  )
}