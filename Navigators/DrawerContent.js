import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

const DrawerContent = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentContainerStyle}>
        <Image
          source={require('../assets/images/logo.jpeg')}
          style={styles.profileImage}
        />
        <Text style={{fontSize: 18, alignSelf: 'center', color: 'white'}}>
          Ghadeeri.pk
        </Text>
      </DrawerContentScrollView>
      <View style={styles.drawerSection}>
        <DrawerItem
          icon={() => <Icon name="book" color={'#6497b1'} size={28} />}
          label="ہمارے بارے میں "
          labelStyle={styles.labelStyle}
          activeBackgroundColor="blue"
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
        <DrawerItem
          icon={() => <Icon1 name="phone" color={'#6497b1'} size={30} />}
          label="رابطہ کریں"
          labelStyle={styles.labelStyle}
          onPress={() => {
            props.navigation.navigate('Contact');
          }}
        />
      </View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: '#6497b1',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  drawerContainer: {
    flex: 1,
  },
  drawerSection: {
    flex: 3,
    flexDirection: 'column',
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 100 / 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
  labelStyle: {
    fontSize: 20,
    fontFamily: 'JameelNooriRegular',
  },
});
