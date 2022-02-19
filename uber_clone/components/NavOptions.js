import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useTailwind } from 'tailwind-rn';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: 'https://links.papareact.com/3pn',
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Offer food',
    image: 'https://links.papareact.com/28w',
    screen: 'EatScreen',
  },
];

const NavOptions = () => {
  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={tw('p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40')}
          >
            <View>
              <Image
                style={{ width: 150, height: 120, resizeMode: 'contain' }}
                source={{ uri: item.image }}
              />
            </View>
            <Text style={tw('mt-2 text-lg font-semibold')}>{item.title}</Text>
            <Icon
              style={tw('p-2 bg-black rounded-full w-10 mt-4')}
              name='arrowright'
              color='white'
              type='antdesign'
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
