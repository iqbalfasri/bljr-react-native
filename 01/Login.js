import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
} from 'react-native';

const backgroundUri = 'https://mfiles.alphacoders.com/666/666960.jpg';
const resizeMode = 'center';

export default class Login extends Component<{}> {
  render() {
    return(
      <View style={styles.container}>
        <Image
          source={require('./img/background.jpg')}
          style={{
            flex : 1,
            resizeMode,
            position : 'absolute',
            width : '100%',
            height : '100%',
            justifyContent : 'center',
          }}
        />
        <View style={{
          backgroundColor : 'rgba(0,0,0, 0.6)',
          flex : 1,
          alignItems : 'center',
          justifyContent : 'center',
        }}>
        <View style={{
          position : 'absolute',
          backgroundColor : 'rgba(255, 255,255, 0.6)' ,
          height : 20, top : 0,
          width : '100%' }}
        />
          <View style={styles.containerLogin}>
            <View style={styles.logoStyle}>
              <Text style={{
                fontSize : 42,
                marginBottom: 50,
                fontWeight : 'bold',
                color : 'white'
              }}>
                Sign in
              </Text>
              {/* <Image source={require('./img/logo.png')} style={{ width: 150, height: 150, marginBottom: 60 }}/> */}
              <TextInput style={styles.inputUser} placeholder='Masukan Email'/>
              <TextInput secureTextEntry={true} style={styles.inputUser} placeholder='Masukan Password' type='password'/>
              <TouchableHighlight style={styles.buttonStyle} onPress={data}>
                <Text style={styles.buttonText}>
                  Login
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>

      </View>
    );
  }
}

const data = () => {
  alert("Login Clicked!!!");
}
const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  buttonStyle:{
    width: 250,
    padding : 10,
    backgroundColor: '#4ec8a3',
    borderRadius: 25
  },
  buttonText: {
    textAlign: 'center',
    color : 'white'
  },
  inputUser: {
    marginBottom: 15,
    paddingRight : 25,
    paddingLeft :  25,
    paddingTop : 10,
    paddingBottom : 10,
    width: 250,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255, .8)',
    color : '#222'
  },
  logoStyle:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width : screen.width,
  },
  logoText:{
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: '400'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4ec8a3',
    position : 'relative',
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
