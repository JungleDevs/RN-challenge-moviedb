import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import ContainerMovie from '../../components/ContainerMovie';
import {topMoviesApi} from '../../service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    alignContent: 'space-around',
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 48,
    top: 56,
    marginLeft: '6.7%',
    marginBottom: 56,
  },
});

const TopMovies = ({navigation}) => {
  const LOADING_TEXT = 'Loading...';
  const TOP_MOVIES = 'Top Movies';
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await topMoviesApi(1);
      setMovieList(response.data.results);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  useEffect(() => {
    fetchMovies();
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{TOP_MOVIES}</Text>
      <FlatList
        data={movieList}
        keyExtractor={i => i.id}
        renderItem={({item}) => {
          return loading ? (
            <Text>{LOADING_TEXT}</Text>
          ) : (
            <ContainerMovie
              img={item.poster_path}
              title={item.title}
              genre={item.genre_ids}
              year={item.release_date}
              rating={item.vote_average}
              onPress={() => navigation.navigate('SearchBy', {movie: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default TopMovies;
