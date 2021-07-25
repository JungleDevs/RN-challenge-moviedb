import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Tv from '../../icons/star.png';

const styles = StyleSheet.create({
  container: {
    height: 168,
    width: '100%',
    borderRadius: 8,
    marginTop: 0,
    alignSelf: 'center',
  },
  imgContainer: {
    width: '100%',
    height: 472,
    position: 'absolute',
  },
  moviesInfo: {
    justifyContent: 'space-between',
    paddingRight: 24,
    paddingLeft: 76,
  },
  movieTitle: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Inter',
    fontSize: 42,
    marginTop: 50,
  },
  movieGenre: {
    color: 'black',
    fontWeight: '400',
    fontFamily: 'Inter',
    fontSize: 12,
  },
  movieTypeYearLength: {
    flexDirection: 'row',
  },
  overviewContainer: {
    fontWeight: '400',
    fontFamily: 'Inter',
    color: 'red',
    fontSize: 14,
    lineHeight: 20,
    backgroundColor: 'red',
  },
  ratingContainer: {
    width: 116,
    height: 24,
    borderRadius: 4,
    backgroundColor: '#252634',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginTop: 16,
  },
  starsIcon: {
    width: 12,
    height: 11.5,
  },
  textRating: {
    color: '#CDCED1',
    fontWeight: '400',
    lineHeight: 26,
    fontFamily: 'Inter',
    fontSize: 12,
  },
  linearGradient: {
    // position: 'absolute',
    flex: 1,
  },
});

const SelectedMovie = ({img, title, genre, year, rating, overview}) => {
  const uri = `https://image.tmdb.org/t/p/w780/${img}`;

  const handleYear = movieYear => {
    if (movieYear !== undefined) {
      return movieYear.substring(0, 4);
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={['black', 'grey']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0.5}}>
        <Image style={styles.imgContainer} source={{uri}} />
        <View style={styles.moviesInfo}>
          <View>
            <Text style={styles.movieTitle}>{title}</Text>
            <View style={styles.movieTypeYearLength}>
              <Text style={styles.movieGenre}>{handleYear(year)}</Text>
              <Text style={styles.movieGenre}>{` • ${genre} • `}</Text>
            </View>
          </View>
          <Text styles={styles.overviewContainer}>{overview}</Text>
          <View style={styles.ratingContainer}>
            <Image style={styles.starsIcon} source={Tv} />
            <Text style={styles.textRating}>{rating}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SelectedMovie;
