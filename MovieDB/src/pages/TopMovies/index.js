import React, {useState} from 'react';
import {View, Text, StyleSheet, Input, FlatList} from 'react-native';
import ContainerMovie from '../../components/ContainerMovie';

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

const TopMovies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const data = [0, 1, 2, 3, 4, 5];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Movies</Text>
      <Input
        type="text"
        onChange={e => {
          setSearchMovie(e.target.value);
        }}
      />
      <FlatList
        data={data}
        keyExtractor={(item, i) => `${i}`}
        renderItem={({item}) => {
          return <ContainerMovie img={item.img} />;
        }}
      />
    </View>
  );
};

export default TopMovies;
