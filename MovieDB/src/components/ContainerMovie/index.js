import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Star from '../../icons/star.png';
import BlanckStar from '../../icons/blanck-star.png';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1B1C2A',
    height: 168,
    width: 312,
    borderRadius: 8,
    marginTop: 16,
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
    width: 162,
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

const ContainerMovie = ({img, title, genre, year, rating, onPress}) => {
  const uri = `https://image.tmdb.org/t/p/w780/${img}`;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgContainer} source={{uri}} />
        </View>
        <View style={styles.moviesInfo}>
          <View>
            <Text style={styles.movieTitle}>{title}</Text>
            <Text style={styles.movieGenre}>{genre}</Text>
            <Text style={styles.movieGenre}>{year.substring(0, 4)}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image style={styles.starsIcon} source={Star} />
            <Text style={styles.textRating}>{rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContainerMovie;
