import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
  Navigator,
} from 'react-native';

export default class KWNavigationBar extends Component {
  render () {
    var NavigationBarRouteMapper = {
      LeftButton : null,
      RightButton : null,
      Title:null,
      // LeftButton : (route, navigator, index, navState) =>
      // {
      //   return (<Text>kevin</Text>);
      // },
      // RightButton : (route, navigator, index, navState) =>
      // {
      //   return (<Text>linlin</Text>);
      // },
      // Title : (route, Navigator, index, navState) =>
      // {
      //   return (<Text>haha</Text>);
      // }
    };

    return (
      <Navigator.NavigationBar
        routeMapper = {NavigationBarRouteMapper}
      />
    );
  }
}
