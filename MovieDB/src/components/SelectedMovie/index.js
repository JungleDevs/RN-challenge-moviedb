import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Tv from '../../images/tv.png';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#1B1C2A',
    height: 168,
    width: '100%',
    borderRadius: 8,
    marginTop: 0,
    alignSelf: 'center',
  },
  imgContainer: {
    width: '100%',
    height: 472,
    // backgroundColor: 'yellow',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
  },
  moviesInfo: {
    justifyContent: 'space-between',
    paddingRight: 24,
    paddingLeft: 76,
  },
  movieTitle: {
    color: 'black',
    fontWeight: '600',
    fontFamily: 'Inter',
    fontSize: 42,
    marginTop: 50,
    backgroundColor: 'white',
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
  linearGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

const SelectedMovie = ({img, title, genre, year, rating, overview}) => {
  const uri = `https://image.tmdb.org/t/p/w780/${img}`;
  return (
    <View style={styles.container}>
      <LinearGradient
        // start={{x: 0, Y: 0}}
        // end={{x: 0, y: 0.1}}
        colors={['rgba(0,0,0,0.00)', 'rgba(0,0,0,0.80)']}
        styles={styles.linearGradient}>
        <Image style={styles.imgContainer} source={uri} />
        <View style={styles.moviesInfo}>
          <View>
            <Text style={styles.movieTitle}>{title}</Text>
            <View style={styles.movieTypeYearLength}>
              <Text style={styles.movieGenre}>2019{(year, ' • ')}</Text>
              <Text style={styles.movieGenre}>Ação{(genre, ' • ')}</Text>
            </View>
          </View>
          <Text styles={styles.overviewContainer}>
            FBI Agent Helter and his partner Lombardi are very close to busting
            a sex-trafficking ring. When they realize their investigation has
            crossed the path of a brutal serial killer, they team up with a
            Texas Ranger to put an end to the infamous 'Truck Stop Killer
            {overview}
          </Text>
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
