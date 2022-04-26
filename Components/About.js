import {StyleSheet, Text, View, Image, Linking} from 'react-native';
import React from 'react';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#6497b1'}}>
          <Image
            source={require('../assets/images/pic.png')}
            style={styles.profileImage}
          />
          <Text style={styles.title}> مولانا افتخار احمد غدیری</Text>
        </View>

        <View style={{padding: 10}}>
          <Text style={styles.bio}>
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
        <TouchableOpacity style={styles.socialIcons}>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://web.facebook.com/iftikhar.ahmed.92351995',
              )
            }>
            <Icon1
              name="facebook"
              color={'#6497b1'}
              size={25}
              style={{marginHorizontal: 10}}
            />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialIcons}>
          <Text
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/channel/UCaJlsSEyMlvM1cBQz0cAFPQ',
              )
            }>
            <Icon name="youtube" color={'#6497b1'} size={28} />
          </Text>
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
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '500',
    color: 'white',
    fontFamily: 'JameelNooriRegular',
  },
  profileImage: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    // marginVertical: 30,
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 10,
  },
  bio: {
    textAlign: 'center',
    fontFamily: 'JameelNooriRegular',
    fontSize: 20,
  },
  socialIcons: {
    padding: 5,
  },
});
