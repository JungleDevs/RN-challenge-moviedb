import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TrendingMovies from '../../components/TrendingMovie';

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
    marginBottom: 56,
  },
});

const Trending = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <TrendingMovies />
    </View>
  );
};

export default Trending;
