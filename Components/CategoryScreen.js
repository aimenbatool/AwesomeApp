import React from 'react';
import {View, Text, Button} from 'react-native';

function CategoryScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Category Screen</Text>

      <Button
        title="Go to Category... again"
        onPress={() => navigation.push('Category')}
      />
    </View>
  );
}

export default CategoryScreen;
