import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';

import SelectedMovie from '../../components/SelectedMovie';
import TrendingMovies from '../../components/TrendingMovie';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    marginTop: 0,
    alignSelf: 'center',
  },
  selectedMovie: {
    // marginBottom: 30,
    height: '60%',
  },
  trendingContainer: {
    marginTop: 0,
  },
});

const SearchBy = ({route}) => {
  // const {movieList, loading} = useSelector(state => state.userReducer);
  // const dispatch = useDispatch();

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
          />
        </View>
      </View>
      <TrendingMovies />
    </>
  );
};

export default SearchBy;
