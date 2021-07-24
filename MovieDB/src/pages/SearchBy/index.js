import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

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

const SearchBy = ({navigation, route}) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const {movie} = route.params;
    console.log('Testando', movie);
    setSelectedMovie(movie);
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SearchBy</Text>
      <FlatList
        data={selectedMovie}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.id}</Text>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchBy;
