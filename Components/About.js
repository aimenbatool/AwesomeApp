import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#6497b1', flex: 0.4}}>
          <Image
            // eslint-disable-next-line no-undef
            source={require('../assets/images/pic.png')}
            style={{
              height: 120,
              width: 120,
              alignSelf: 'center',
              marginVertical: 30,
            }}></Image>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              fontWeight: '500',
              color: 'white',
              fontFamily: 'JameelNooriRegular',
            }}>
            {' '}
            مولانا افتخار احمد غدیری
          </Text>
        </View>

        <View style={{padding: 10, flex: 0.4}}>
          <Text
            style={{
              textAlign: 'center',
              fontFamily: 'JameelNooriRegular',
              fontSize: 15,
            }}>
            مولانا افتخار احمد غدیری نے ابتدائی دینی تعلیم اسلام آباد میں مدرسہ
            جامعہ اہل بیت علہم السلام سے حاصل کی، پھر اعلی دینی تعلیم حاصل کرنے
            کے لیے ایران گئے اور چار مہینے مشہد مقدس سے تعلیم حاصل کی اور پھر قم
            المقدس تعلیم حاصل کرنے گئے جہاں چار سال تین مہینے تعلیم حاصل کی، پھر
            دین کی تبلیغ کے لیے ۲۰۰۹ لاہور (پاکستان) میں تشریف لائے اور تفسیر و
            ترجمہ قرآن اور معارف اہل بیت علیہم السلام (نہج البلاغہ ،صحیفہ
            سجادیہ، زیارت جامعہ کبیرہ کی شرح وغیرہ) کی تبلیغ میں مصروف عمل ہیں.
          </Text>
        </View>
      </View>
      <View style={{justifyContent: 'center', flexDirection: 'row', flex: 0.1}}>
        <TouchableOpacity>
          <Icon1
            name="facebook"
            color={'#6497b1'}
            size={25}
            style={{marginHorizontal: 10}}></Icon1>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="youtube" color={'#6497b1'} size={28}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
});
