import { CategoryButton } from '@/components/cartegory';
import { Header } from '@/components/header';
import { View, Text } from 'react-native';



export default function Home() {

  return (
    <View className=" flex-1 pt-8">
      <Header title="Cardápio" cartQuantityItems={8} />
      <CategoryButton title='Lanche do dia' />
    </View>
  );
}