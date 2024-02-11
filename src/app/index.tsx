import { Link } from 'expo-router';
import { View, FlatList, SectionList, Text } from 'react-native';

import { CategoryButton } from '@/components/cartegory';
import { Header } from '@/components/header';

import { useHome } from '@/hooks/useHome';
import { Product } from '@/components/Product';



export default function Home() {
  const { category, handleCategorySelect, CATEGORIES, MENU, sectionListRef } = useHome()


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
      <SectionList
        ref={sectionListRef}
        className='flex-1 p-5'
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild >
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className='text-xl text-neutral-100 font-heading mt-8 mb-3'>{title}</Text>
        )}

      />
    </View>
  );
}