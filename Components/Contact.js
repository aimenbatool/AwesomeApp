import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        دروس کے حوالے سے معلومات اور رابطہ کیلئے درج ذیل نمبروں پر رابطہ کریں۔{' '}
      </Text>
      <Text>{''}</Text>
<<<<<<< HEAD
      <Text style={{fontSize: 18, fontFamily: 'JameelNooriRegular'}}>
        {' '}
        مولانا افتخار احمد غدیری
      </Text>
      <Text>{''}</Text>

=======
      <Text style={styles.body}>مولانا افتخار احمد غدیری</Text>
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
      <View style={{flexDirection: 'row'}}>
        <Icon name="phone" color={'#6497b1'} size={18} />
        <Text style={styles.body}> 3593593 307 92+ </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Icon name="phone" color={'#6497b1'} size={18} />

        <Text style={styles.body}> 8696677 312 92+</Text>
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

<<<<<<< HEAD
  text: {
    fontSize: 15,
=======
  heading: {
    fontSize: 25,
    fontFamily: 'JameelNooriRegular',
  },

  body: {
    fontSize: 18,
>>>>>>> 4ae845ef28d7096631d1dce77dad26cf12b92f84
    fontFamily: 'JameelNooriRegular',
  },
});
