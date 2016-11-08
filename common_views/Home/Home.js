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
  TouchableOpacity,
} from 'react-native';

import KWNavigationBar from './../KWNavigationBar'

class HomeView extends Component {
  constructor() {
    super();
  }
  render () {

    var NavigationBarRouteMapper = {
      LeftButton : (route, navigator, index, navState) =>
      {
        return (<Text>kevin</Text>);
      },
      RightButton : (route, navigator, index, navState) =>
      {
        return (<Text>linlin</Text>);
      },
      Title : (route, Navigator, index, navState) =>
      {
        return (<Text>haha</Text>);
      }
    };

    return (
      <View style={{margin:40}}>
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text>点我跳转</Text>
        </TouchableOpacity>
          <Navigator.NavigationBar
            routeMapper = {NavigationBarRouteMapper}
          />
      </View>
    );
  }
  _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: HomeView,
            })
        }
    }
}

export default class Home extends Component {

  renderNav(route,nav){
    return <HomeView navigator={nav} title="Main" />;
  }

  render(){
    var NavigationBarRouteMapper = {
      LeftButton : (route, navigator, index, navState) =>
      {
        return (<Text>kevin</Text>);
      },
      RightButton : (route, navigator, index, navState) =>
      {
        return (<Text>linlin</Text>);
      },
      Title : (route, Navigator, index, navState) =>
      {
        return (<Text>haha</Text>);
      }
    };

    return(
      <Navigator
      initialRoute={{id:"main",title:"Main"}}
      renderScene={this.renderNav}
      configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
      // navigationBar={
          // <KWNavigationBar />
          // <Navigator.NavigationBar
          //   routeMapper={NavigationBarRouteMapper}
          // />
        // }
      />
    );
  }
}
