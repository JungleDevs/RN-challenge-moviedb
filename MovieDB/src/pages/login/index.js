import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

import logo from '../../images/tv.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'royalblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {width: 100, height: 100, position: 'absolute'},
  inputContainer: {
    width: '100%',
    marginTop: 450,
    alignItems: 'center',
  },
  input: {
    width: '60%',
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: 'white',
  },
  loginButton: {
    width: 150,
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderRadius: 6,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 12,
    backgroundColor: 'white',
  },
});

const Login = ({navigation}) => {
  const [login, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleClick = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.imageContainer} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholderTextColor="white"
          placeholder="Login"
          value={login}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholderTextColor="white"
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity onPress={handleClick}>
        <View style={styles.loginButton}>
          <Text>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
