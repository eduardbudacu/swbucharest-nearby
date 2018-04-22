import React from 'react';
import { StyleSheet, View, FlatList, DrawerLayoutAndroid, ScrollView } from 'react-native';

import { COLOR, ThemeProvider, Button, ActionButton } from 'react-native-material-ui';

import { Toolbar } from 'react-native-material-ui';

import { Container, Header, Content, List, ListItem, Text, Left, Right } from 'native-base';

import DrawerMenu from './components/DrawerMenu'

import { NativeModules } from 'react-native';

import  MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const activityStarter = NativeModules.ActivityStarter;

// you can set your style right here, it'll be propagated to application
const uiTheme = {
    palette: {
        primaryColor: COLOR.green500,
    },
    toolbar: {
        container: {
            height: 50,
        },
    },
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: []
    }
  }

  componentDidMount() {
    this.setState({markers: [
      {
        id: 1,
        latlng: {latitude:44.439663, longitude:26.096306},
        title: 'some title',
        description: 'some description'
      }
    ]})
  }

  openMenu() {
    this.refs['DRAWER_REF'].openDrawer();
  }

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <DrawerMenu activityStarter={activityStarter} />
      </View>
    );
    return (
      <ThemeProvider uiTheme={uiTheme}>  
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}
          ref={'DRAWER_REF'}>       
          <View style={styles.container}>
          <Toolbar
              leftElement="menu"
              centerElement="ParkNearbyApp"
              searchable={{
                autoFocus: true,
                placeholder: 'Cauta',
              }}
              onLeftElementPress={() => this.openMenu()}
            />  
            <ActionButton icon="done" /> 
            <MapView
              style={styles.map}
              region={{
                latitude:44.439663, longitude:26.096306,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              }}
            >
              {this.state.markers.map(marker => (
                <Marker key={marker.id}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}
                />
              ))}
            </MapView>
          </View>
        </DrawerLayoutAndroid>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});
