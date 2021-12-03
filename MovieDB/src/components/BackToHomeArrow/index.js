import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import Arrow from '../../icons/arrow.png';

const styles = StyleSheet.create({
  arrowContainer: {
    width: 20,
    height: 20,
  },
});

const BackToHomeArrow = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Trending')}>
      <Image source={Arrow} style={styles.arrowContainer} />
    </TouchableOpacity>
  );
};

export default BackToHomeArrow;
