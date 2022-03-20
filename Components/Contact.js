import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        دروس کے حوالے سے معلومات اور رابطہ کیلئے درج ذیل نمبروں پر رابطہ کریں۔{' '}
      </Text>
      <Text>{''}</Text>
      <Text style={{fontSize: 18, fontFamily: 'JameelNooriRegular'}}>
        {' '}
        مولانا افتخار احمد غدیری
      </Text>
      <Text>{''}</Text>

      <View style={{flexDirection: 'row'}}>
        <Icon
          name="phone"
          color={'#6497b1'}
          size={18}
          style={{flex: 0.1}}></Icon>
        <Text style={styles.text}> 3593593 307 92+ </Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Icon
          name="phone"
          color={'#6497b1'}
          size={18}
          style={{flex: 0.1}}></Icon>

        <Text style={styles.text}> 8696677 312 92+</Text>
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  text: {
    fontSize: 15,
    fontFamily: 'JameelNooriRegular',
  },
});
