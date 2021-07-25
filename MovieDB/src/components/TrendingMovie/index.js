import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import ContainerMovie from '../../components/ContainerMovie';
import {trendingMovies} from '../../service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    alignContent: 'space-around',
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    marginLeft: '6.66%',
    top: 56,
    marginBottom: 56,
  },
});

const TrendingMovies = ({navigation}) => {
  const LOADING_TEXT = 'Loading...';
  const TRENDING_MOVIES = 'Also Trending';
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await trendingMovies(1);
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
      <Text style={styles.title}>{TRENDING_MOVIES}</Text>
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
              genre={item.genres}
              year={item.release_date}
              rating={item.vote_average}
            />
          );
        }}
      />
    </View>
  );
};

export default TrendingMovies;
