import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ContainerMovie from '../../components/ContainerMovie';
import SearchMovie from '../SearchMovie';
import {trendingMovies} from '../../service';
import Lupa from '../../icons/lupa.png';

import {setMovieList, setLoading} from '../../store/actions/index';

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
  const [visible, setVisible] = useState(false);
  const {movieList, loading} = useSelector(state => state.userReducerMovie);
  const dispatch = useDispatch();

  const LOADING_TEXT = 'Loading...';
  const TOP_MOVIE = 'Top Movies';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await trendingMovies(1);
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
      <View style={styles.headerContainer}>
        <Text style={styles.title}>{TOP_MOVIE}</Text>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image source={Lupa} style={styles.lupaContainer} />
        </TouchableOpacity>
        <Modal animationType="slide" visible={visible}>
          <SearchMovie />
        </Modal>
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
