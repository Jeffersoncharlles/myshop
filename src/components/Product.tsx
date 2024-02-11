import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

type ProductDataProps = {
  title: string
  description: string
  thumbnail: ImageProps
}

interface Props extends TouchableOpacityProps {
  data: ProductDataProps
}


export function Product({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} className="w-full flex-row items-center pb-4">
      <Image
        className="w-20 h-20 rounded-md"
        source={data.thumbnail}
      />
      <View className="flex-1 ml-3">
        <Text className="text-neutral-100 font-subtitle text-base flex-1">
          {data.title}
        </Text>
        <Text className="text-neutral-300 text-xs leading-5 mt-0.5">
          {data.description}
        </Text>
      </View>
    </TouchableOpacity>
  )
}