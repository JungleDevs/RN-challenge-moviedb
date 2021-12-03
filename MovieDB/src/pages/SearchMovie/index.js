import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ContainerMovie from '../../components/ContainerMovie';
import {searchMoviesAPI} from '../../service';

import {setMovieList, setLoading} from '../../store/actions/index';
import BackToHomeArrow from '../../components/BackToHomeArrow';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    alignContent: 'space-around',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 26,
    top: 56,
    marginBottom: 56,
  },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 1,
    height: 30,
    width: 150,
  },
  arrowContainer: {
    width: 20,
    height: 20,
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

const SearchMovie = () => {
  const {movieList, loading} = useSelector(
    state => state.searchMovieUserReducerMovie,
  );
  const dispatch = useDispatch();

  const LOADING_TEXT = 'Loading...';

  const [query, setQuery] = useState('');

  const fetchMovies = useCallback(async () => {
    try {
      const response = await searchMoviesAPI(query);
      console.log(response.data.results);
      dispatch(setMovieList(response.data.results));
    } catch (error) {
      console.log('Error:', error);
    }
  }, [query, dispatch]);

  useEffect(() => {
    fetchMovies();
    setLoading(false);
  }, [fetchMovies]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          type="text"
          name="query"
          placeholder="Search Movie"
          onChange={e => setQuery(e.target.value)}
        />
        <BackToHomeArrow />
      </View>
      <FlatList
        data={movieList}
        keyExtractor={i => i.id}
        renderItem={({item}) => {
          return loading ? (
            <Text>{LOADING_TEXT}</Text>
          ) : (
            <>
              <ContainerMovie
                img={item.poster_path}
                title={item.title}
                genre={item.genres}
                year={item.release_date}
                rating={item.vote_average}
              />
            </>
          );
        }}
      />
    </View>
  );
};

export default SearchMovie;
