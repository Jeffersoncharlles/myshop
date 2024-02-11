import { CategoryButton } from '@/components/cartegory';
import { Header } from '@/components/header';
import { View, Text, FlatList } from 'react-native';
import { CATEGORIES } from '@/utils/data/products'
import { useHome } from '@/hooks/useHome';


export default function Home() {
  const { category, handleCategorySelect } = useHome()

  return (
    <View className=" flex-1 pt-8">
      <Header title="Cardápio" cartQuantityItems={8} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        className='max-h-10 mt-5'
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

    </View>
  );
}