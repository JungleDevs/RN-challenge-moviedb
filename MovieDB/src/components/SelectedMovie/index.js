import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Star from '../../icons/star.png';

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
  arrowContainer: {
    width: 20,
    height: 20,
    position: 'absolute',
    marginHorizontal: 26,
    top: 30,
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
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Inter',
    fontSize: 14,
    lineHeight: 20,
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
});

const SelectedMovie = ({
  img,
  title,
  genre,
  year,
  rating,
  overview,
  onPress,
  icon,
}) => {
  const uri = `https://image.tmdb.org/t/p/w780/${img}`;

  const handleYear = movieYear => {
    if (movieYear !== undefined) {
      return movieYear.substring(0, 4);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.imgContainer} source={{uri}} />
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 50, bottom: 50, left: 50, right: 50}}>
        <Image source={icon} style={styles.arrowContainer} />
      </TouchableOpacity>
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
          <Image style={styles.starsIcon} source={Star} />
          <Text style={styles.textRating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedMovie;
