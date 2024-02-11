import { Slot } from "expo-router";
import { useColorScheme } from "nativewind";
import { SafeAreaView, Appearance } from "react-native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'
import { useFonts } from "expo-font";
import { Loading } from "@/components/loading";


export default function HomeLayout() {


  const [fontsLoading] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  if (!fontsLoading) {
    return <Loading />
  }
  return (
    <SafeAreaView className=" bg-neutral-800 flex-1 text-neutral-200">
      <Slot />
    </SafeAreaView>
  )
}