import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 48,
    left: 56,
    top: 56,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export default Home;
