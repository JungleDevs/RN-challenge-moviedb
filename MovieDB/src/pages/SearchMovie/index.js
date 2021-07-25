import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from 'react-native';

import ContainerMovie from '../../components/ContainerMovie';
import {searchMoviesAPI} from '../../service';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    alignContent: 'space-around',
  },
  input: {
    color: 'white',
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 3,
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

const SearchMovie = ({navigation}) => {
  const LOADING_TEXT = 'Loading...';

  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const fetchMovies = useCallback(async () => {
    try {
      const response = await searchMoviesAPI(query);
      console.log(response.data.results);
      setMovieList(response.data.results);
    } catch (error) {
      console.log('Error:', error);
    }
  }, [query]);

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
