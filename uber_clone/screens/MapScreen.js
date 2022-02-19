import { View, Text } from 'react-native';
import React from 'react';

import { useTailwind } from 'tailwind-rn';

const MapScreen = () => {
  const tw = useTailwind();

  return (
    <View>
      <Text>MapScreen</Text>
    </View>
  );
};

export default MapScreen;
