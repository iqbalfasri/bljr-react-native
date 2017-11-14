import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.HomeContainer}>
        <Text style={{ color: '#fff', fontSize : 32 }}>
          Home Screen
        </Text>
        <TouchableHighlight
          style={{
            marginTop : 25 ,
            backgroundColor : '#fff' ,
            padding : 10,
            borderRadius : 30,
            width : 125
          }} onPress={() => Actions.second()}>
          <Text style={{ textAlign : 'center' }}>
            Next page
          </Text>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6BAC89',
    flexDirection : 'column'
  },
});
