import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ContainerMovie from '../../components/ContainerMovie';
import {topMoviesApi} from '../../service';

import {setMovieList, setLoading} from '../../store/actions/index';

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
  const {movieList, loading} = useSelector(
    state => state.topMovieUserReducerMovie,
  );
  const dispatch = useDispatch();

  const LOADING_TEXT = 'Loading...';
  const TOP_MOVIES = 'Top Movies of all time';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await topMoviesApi(1);
        dispatch(setMovieList(response.data.results));
      } catch (e) {
        console.log('Error: ', e);
      }
    };
    fetchMovies();
    setLoading(false);
  }, [dispatch]);

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
