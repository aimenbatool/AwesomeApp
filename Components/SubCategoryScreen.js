import React, {useEffect, useState} from 'react';
import {
  Left,
  List,
  ListItem,
  Text,
  Body,
  Icon,
  Container,
  Content,
} from 'native-base';
import {StyleSheet} from 'react-native';
import Globals from '../utils/Globals';

const SubCategoryScreen = ({route, navigation}) => {
  const {category} = route.params;
  const {subCategories} = category;
  const [categories, setCategories] = useState([]);
  const {API_URL} = Globals;

  const getCategories = async () => {
    try {
      let response = await fetch(`${API_URL}categories`);
      let json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories()
      .then(res => {
        setCategories(res);
      })
      .catch(err => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <List>
          {subCategories &&
            subCategories.map(subCategory => {
              let data = categories.find(cat => cat._id === subCategory);

              let navigtionRoute =
                data && data.subCategories.length > 0
                  ? 'SubCategory'
                  : 'Playlist';

              return (
                <ListItem
                  key={subCategory}
                  onPress={() =>
                    navigation.navigate(navigtionRoute, {
                      name: data && data.nameUr,
                      category: data,
                    })
                  }>
                  <Left>
                    <Text style={styles.playlistItem}>
                      {data && data.nameUr}
                    </Text>
                  </Left>
                  <Body>
                    <Icon name="chevron-back-outline" />
                  </Body>
                </ListItem>
              );
            })}
        </List>
      </Content>
    </Container>
  );
};

export default SubCategoryScreen;

let styles = StyleSheet.create({
  playlistItem: {
    fontFamily: 'JameelNooriRegular',
  },
});
