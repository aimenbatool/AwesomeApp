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
import Globals from '../utils/Globals';

const CategoryScreen = ({navigation}) => {
  const [categories, setCategories] = useState();
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
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => console.log(err));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Content>
        <List>
          {categories &&
            categories.map((category) => {
              const {subCategories} = category;
              let navigationRoute =
                subCategories.length > 0 ? 'SubCategory' : 'Playlist';
              if (category.parentId === 'none') {
                return (
                  <ListItem
                    key={category._id}
                    onPress={() =>
                      navigation.navigate(navigationRoute, {
                        name: category.nameUr,
                        category: category,
                      })
                    }>
                    <Left>
                      <Text> {category.nameUr} </Text>
                    </Left>
                    <Body>
                      <Icon name="chevron-back-outline" />
                    </Body>
                  </ListItem>
                );
              }
            })}
        </List>
      </Content>
    </Container>
  );
};

export default CategoryScreen;
