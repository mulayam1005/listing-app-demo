import React from 'react';
import {FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import ListData from '../../utils/fake-data';
import {ListItem} from './components/item';
export interface IListItem {
  id: string;
  name: string;
  description: String;
  price: string;
  salePrice: any;
  brand: String;
}

const ListScreen = () => {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <FlatList
        data={ListData}
        renderItem={({item}) => <ListItem key={item.id} item={item} />}
      />
    </SafeAreaView>
  );
};

export default ListScreen;
