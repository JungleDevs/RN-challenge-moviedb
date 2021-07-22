import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import search from '../../assets/icons/search.png';
import * as S from './styles';

const Trending: React.FC = () => {
  return (
    <S.Container>
      <SafeAreaView />
      <S.Header>
        <S.Title>Top Movies</S.Title>
        <TouchableOpacity>
          <S.Search source={search} />
        </TouchableOpacity>
      </S.Header>
    </S.Container>
  );
};

export default Trending;
