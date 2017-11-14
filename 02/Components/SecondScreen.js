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

export default class SecondScreen extends Component {
  render() {
    return (
      <View style={styles.SecondContainer}>
        <Text style={{ color: '#fff', fontSize : 32 }}>
          Second Screen
        </Text>
        <TouchableHighlight
          style={{
            marginTop : 25 ,
            backgroundColor : '#fff' ,
            padding : 10,
            borderRadius : 30
          }} onPress={() => Actions.home()}>
          <Text>
            Back
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  SecondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#607CC2',
    flexDirection : 'column'
  },
});
