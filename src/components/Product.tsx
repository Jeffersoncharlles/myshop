import { forwardRef } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
  quantity?: number
}

interface Props extends TouchableOpacityProps {
  data: ProductDataProps
}


export const Product = forwardRef<TouchableOpacity, Props>(({ data, ...rest }, ref) => {



  return (
    <TouchableOpacity ref={ref} {...rest} className="w-full flex-row items-center pb-4">
      <Image
        className="w-20 h-20 rounded-md"
        source={data.thumbnail}
      />
      <View className="flex-1 ml-3">
        <View className="flex-row items-center ">
          <Text className="text-neutral-100 font-subtitle text-base flex-1">
            {data.title}
          </Text>
          {data.quantity && (
            <Text className="text-neutral-300 font-subtitle text-sm">
              x  {data.quantity}
            </Text>
          )}
        </View>
        <Text className="text-neutral-300 text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
})