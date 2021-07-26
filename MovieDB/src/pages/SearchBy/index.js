import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import SelectedMovie from '../../components/SelectedMovie';
import TrendingMovies from '../../components/TrendingMovie';
import Arrow from '../../icons/arrow.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    alignSelf: 'center',
  },
  selectedMovie: {
    height: '60%',
  },
  trendingContainer: {
    marginTop: 0,
  },
  arrowContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginHorizontal: 26,
    // top: 56,
  },
});

const SearchBy = ({navigation, route}) => {
  const [selectedMovie, setSelectedMovie] = useState([]);

  useEffect(() => {
    const {movie} = route.params;
    console.log('Testando', movie);
    setSelectedMovie(movie);
  }, [route.params]);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.selectedMovie}>
          <SelectedMovie
            img={selectedMovie.backdrop_path}
            title={selectedMovie.title}
            genre={selectedMovie.genre_ids}
            year={selectedMovie.release_date}
            rating={selectedMovie.vote_average}
            overview={selectedMovie.overview}
            onPress={() => navigation.navigate('Trending')}
            icon={Arrow}
          />
        </View>
      </View>
      <TrendingMovies />
    </>
  );
};

export default SearchBy;
