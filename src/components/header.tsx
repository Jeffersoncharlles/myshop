import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons'
import colors from "tailwindcss/colors";
import { Link } from "expo-router";

interface Props {
  title: string
  cartQuantityItems?: number
}


export function Header({ title, cartQuantityItems = 0 }: Props) {
  return (
    <View className="flex-row items-center border-b border-orange-500 pb-5 mx-5">
      <View className="flex-1">
        <View className="flex-row items-center">
          <Feather name="shopping-bag" color={colors.orange[500]} size={36} />
          <Text className="font-heading text-2xl text-orange-500 pl-2">MyShop</Text>
        </View>
        <Text className="text-orange-50 font-heading mt-2 text-xl">
          {title}
        </Text>
      </View>
      {cartQuantityItems > 0 && (
        <Link href={"/cart/"} asChild>
          <TouchableOpacity className="relative" activeOpacity={0.7}>
            <View className="bg-lime-500 absolute -top-2.5 z-10 -right-3.5 w-5 h-5 rounded-full items-center justify-center">
              <Text className="text-lime-900 font-bold text-xs">
                {cartQuantityItems}
              </Text>
            </View>

            <Feather name="shopping-cart" color={colors.neutral[100]} size={24} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  )
}