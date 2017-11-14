import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import SecondScreen from './Components/SecondScreen';
import HomeScreen from './Components/HomeScreen';
import ElevatedView from 'react-native-elevated-view';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene
            key="home"
            component={HomeScreen}
            title= 'Home'
            initial
          />

          <Scene
            key="second"
            component={SecondScreen}
            title= 'Second Screen'
          />

        </Scene>
      </Router>
    );
  }
}


const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6BAC89',
    flexDirection : 'row'
  },
  stayElevated: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: '#fff',
    flex : 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
