import {View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import {DrawerContentScrollView, DrawerItem , DrawerItemList} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Entypo';

import { Avatar } from 'react-native-elements/dist/avatar/Avatar';


const DrawerContent = props => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#6497b1" , padding:30}}>
    
    <Image source={require('../assets/images/logo.jpeg')} 
    style={{ height:90 , width:90 , borderRadius:100/2 , alignSelf:"center" , marginVertical:20}}></Image>
    <Text style={{ fontSize:18 , alignSelf:"center" , color:"white"}}> Ghaderi.pk </Text>

      </DrawerContentScrollView>

      <View style={styles.drawerSection}>
        
        <DrawerItem
          icon={() => (
            <Icon name="book" color={'#6497b1'} size={28} />
          )}
          label="ہمارے بارے میں "
          labelStyle={{fontSize:20 , fontFamily:"JameelNooriRegular" }}
          activeBackgroundColor="blue"
          onPress={() => {
            props.navigation.navigate('About');
          }}
        />
        <DrawerItem
          icon={() => (
            <Icon1 name="phone" color={'#6497b1'} size={30} />
          )}
          label="رابطہ کریں"
          labelStyle={{fontSize:20, fontFamily:"JameelNooriRegular"}}
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
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginBottom:400
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
