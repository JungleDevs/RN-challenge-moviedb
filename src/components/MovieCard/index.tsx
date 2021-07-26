import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import MedalIcon from '../../assets/svg/medal.svg';
import * as S from './styles';
import { setCurrentMovie } from '../../slices/movies';
import Stars from '../Stars';

interface CardProps {
  image: string;
  isFirst?: boolean;
  title: string;
  genres: string[];
  year: string;
  rating: number;
  overview: string;
}

const MovieCard: React.FC<CardProps> = ({
  image,
  title,
  year,
  isFirst,
  genres,
  rating,
  overview,
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <S.Container
      onPress={() => {
        dispatch(
          setCurrentMovie({
            image,
            title,
            year,
            isFirst,
            genres,
            rating,
            overview,
          }),
        );
        navigation.navigate('Details');
      }}
      isFirst={isFirst ?? false}
    >
      {image ? (
        <S.Banner
          source={{ uri: `https://image.tmdb.org/t/p/w342${image}` }}
          resizeMode="stretch"
        />
      ) : (
        <S.EmptyBanner>
          <Icon name="image" size={38} color="#CDCED1" />
        </S.EmptyBanner>
      )}
      <S.Info>
        <View>
          {isFirst && (
            <S.TopTrending>
              <MedalIcon height={24} />
              <S.TrendingText>Top movie this week</S.TrendingText>
            </S.TopTrending>
          )}
          <S.Title>{title}</S.Title>
          <S.Text>{year}</S.Text>
          <S.Text>
            {!!genres[0] && genres[0]} {!!genres[1] && `/ ${genres[1]}`}
          </S.Text>
        </View>
        <Stars isFirst={isFirst} rating={rating} />
      </S.Info>
    </S.Container>
  );
};

export default MovieCard;
