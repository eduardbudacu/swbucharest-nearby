import React from 'react';

import { Container, Header, Content, List, ListItem, Text } from 'native-base';

export default class DrawerMenu extends React.Component {
    render() {
      return (
        <Container>
          <Content>
            <List>
              <ListItem onPress={() => alert('MySpaces')}>
                <Text>MySpaces</Text>
              </ListItem>
              <ListItem onPress={() => alert('Add Space')}>
                <Text>Add Space</Text>
              </ListItem>
            </List>
          </Content>
        </Container>
      );
    }
  }