import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import ContainerMovie from '../../components/ContainerMovie';
import SearchMovie from '../SearchMovie';
import {trendingMovies} from '../../service';
import Lupa from '../../icons/lupa.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#070818',
    flex: 1,
    alignContent: 'space-around',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 26,
    top: 56,
    marginBottom: 56,
  },
  lupaContainer: {
    width: 20,
    height: 20,
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 48,
  },
});

const Trending = ({navigation}) => {
  const LOADING_TEXT = 'Loading...';
  const TOP_MOVIE = 'Top Movies';
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
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{TOP_MOVIE}</Text>
        <TouchableOpacity onPress={() => <SearchMovie />}>
          <Image source={Lupa} style={styles.lupaContainer} />
        </TouchableOpacity>
      </View>
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
              year={item.release_date.substring(0, 4)}
              rating={item.vote_average}
              onPress={() => navigation.navigate('SearchBy', {movie: item})}
            />
          );
        }}
      />
    </View>
  );
};

export default Trending;
