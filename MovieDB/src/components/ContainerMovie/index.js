import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Tv from '../../images/tv.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1B1C2A',
    height: 168,
    width: 312,
    borderRadius: 8,
    alignSelf: 'center',
  },
  imgContainer: {
    width: 118,
    height: 168,
    backgroundColor: '#252634',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  moviesInfo: {
    justifyContent: 'space-between',
    padding: 16,
  },
  movieTitle: {
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Inter',
    fontSize: 16,
  },
  movieGenre: {
    color: '#CDCED1',
    fontWeight: '400',
    fontFamily: 'Inter',
    fontSize: 12,
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

const ContainerMovie = (img, title, genre, year, rating) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.imgContainer} source={img} />
      </View>
      <View style={styles.moviesInfo}>
        <View>
          <Text style={styles.movieTitle}>{title}</Text>
          <Text style={styles.movieGenre}>{genre}</Text>
          <Text style={styles.movieGenre}>{year}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Image style={styles.starsIcon} source={Tv} />
          <Text style={styles.textRating}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ContainerMovie;
