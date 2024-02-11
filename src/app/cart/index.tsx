import { View, Text, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'





import { Product } from "@/components/Product";
import { Header } from "@/components/header";
import { Input } from "@/components/input";
import { LinkButton } from "@/components/link-button";
import { useCartPage } from "@/hooks/useCart";
import { Button } from "@/components/button";
import { Feather, SimpleLineIcons } from "@expo/vector-icons";
import colors from "tailwindcss/colors";



export default function Cart() {
  const { products, total, handleProductRemove } = useCartPage()

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />
      <KeyboardAwareScrollView
        showsHorizontalScrollIndicator={false}
        extraHeight={100}
      >
        <ScrollView>
          <View className="p-5 flex-1">
            {
              products.length > 0 ? (
                <View className="border-b border-neutral-700">
                  {
                    products.map((product) => (
                      <Product
                        key={product.id}
                        data={product}
                        onPress={() => handleProductRemove(product)}
                      />
                    ))
                  }
                </View>

              ) : (
                <Text className="font-body text-neutral-400 text-center my-8">
                  Seu Carrinho está vazio.
                </Text>
              )
            }
            <View className="flex-row gap-2 items-center mt-5 ml-4 mb-4 relative ">
              <View className="absolute  right-0 top-2 rounded-full bg-lime-600 h-8 w-8 flex items-center justify-center">
                <SimpleLineIcons name="location-pin" size={24} color={colors.lime[950]} />
              </View>
              <Text className="text-neutral-50 text-2xl font-subtitle">
                Total
              </Text>
              <Text className="text-lime-400 text-3xl font-subtitle">
                {total}
              </Text>
            </View>
            <Input placeholder="Informe o endereço de entrega com rua, bairro, CEP, numero e complemento, enviar a localização " />
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5  ">

        <Button>
          <Button.Text>
            Enviar pedido
          </Button.Text>
          <Button.Icon>
            <Feather name="arrow-right-circle" size={20} />
          </Button.Icon>
        </Button>
      </View>
      <LinkButton
        href="/"
        title="Voltar ao cardápio"
      />

    </View>
  )
}