import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import logo from '../../images/tv.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007CFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {width: 100, height: 100},
  textStyle: {alignSelf: 'center', color: 'white', fontSize: 20},
});

const Splash = ({navigation}) => {
  const login = () => {
    navigation.navigate('Login');
  };

  useEffect(() => {
    setTimeout(() => {
      login();
    }, 1500);
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={login}>
        <Image source={logo} style={styles.imageContainer} />
        <Text style={styles.textStyle}>MovieDB</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
