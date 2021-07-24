import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import ContainerMovie from '../../components/ContainerMovie';
import {trendingMovies} from '../../service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    alignContent: 'space-around',
  },
});

const TrendingMovies = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await trendingMovies(1);
      console.log(response.data.results);
      setMovieList(response.data.results);
    } catch (e) {
      console.log('Error: ', e);
    }
  };

  useEffect(() => {
    fetchMovies();
    setLoading(false);
  }, []);

  const LOADING_TEXT = 'Loading...';

  return (
    <View style={styles.container}>
      <FlatList
        data={movieList}
        keyExtractor={i => i.id}
        renderItem={({item}) => {
          return loading ? (
            <Text>{LOADING_TEXT}</Text>
          ) : (
            <TouchableOpacity>
              <ContainerMovie
                img={item.poster_path}
                title={item.title}
                genre={item.genres}
                year={item.release_date}
                rating={item.vote_average}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default TrendingMovies;
