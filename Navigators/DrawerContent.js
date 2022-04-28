<<<<<<< HEAD
/* eslint-disable no-undef */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
=======
import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

const DrawerContent = props => {
  return (
<<<<<<< HEAD
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#6497b1', padding: 30}}>
        <Image
          source={require('../assets/images/logo.jpeg')}
          style={{
            height: 90,
            width: 90,
            borderRadius: 100 / 2,
            alignSelf: 'center',
            marginVertical: 20,
          }}></Image>
        <Text style={{fontSize: 18, alignSelf: 'center', color: 'white'}}>
          {' '}
          Ghaderi.pk{' '}
=======
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
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
        </Text>
      </DrawerContentScrollView>
      <View style={styles.drawerSection}>
        <DrawerItem
          icon={() => <Icon name="book" color={'#6497b1'} size={28} />}
          label="ہمارے بارے میں "
<<<<<<< HEAD
          labelStyle={{fontSize: 20, fontFamily: 'JameelNooriRegular'}}
=======
          labelStyle={styles.labelStyle}
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
          activeBackgroundColor="blue"
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
        <DrawerItem
          icon={() => <Icon1 name="phone" color={'#6497b1'} size={30} />}
          label="رابطہ کریں"
<<<<<<< HEAD
          labelStyle={{fontSize: 20, fontFamily: 'JameelNooriRegular'}}
=======
          labelStyle={styles.labelStyle}
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
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
<<<<<<< HEAD
    marginBottom: 400,
=======
    flex: 3,
    flexDirection: 'column',
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
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
