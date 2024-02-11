
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { useProduct } from "@/hooks/useProduct";
import { formatCurrency } from "@/utils/format-currency";
import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";


export default function Product() {
  const { id, product, handleAddToCart } = useProduct()



  return (
    <View className="flex-1">
      <Image
        className="w-full h-52 "
        resizeMode="cover"
        source={product.cover}
      />

      <View className="p-5 mt-8 flex-1">
        <Text className="text-orange-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-neutral-200 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text className="text-neutral-300/90 font-body text-base leading-6" key={ingredient}>
            {"\u2022"}  {ingredient}
          </Text>
        ))}
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>
            Adicionar ao pedido
          </Button.Text>
        </Button>
        <LinkButton title="Voltar ao cardápio" href="/" />
      </View>
    </View>
  )
}