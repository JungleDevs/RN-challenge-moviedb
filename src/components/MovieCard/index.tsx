import React from 'react';

import MedalIcon from '../../assets/svg/medal.svg';
import * as S from './styles';

interface CardProps {
  image: string;
  isFirst: boolean;
  title: string;
  genres?: string;
  year: string;
  rating?: unknown;
}

const MovieCard: React.FC<CardProps> = ({ image, title, year, isFirst }) => {
  return (
    <S.Container isFirst={isFirst ?? false}>
      <S.Banner
        source={{ uri: `https://image.tmdb.org/t/p/w342${image}` }}
        resizeMode="stretch"
      />
      <S.Info>
        {isFirst && (
          <S.TopTrending>
            <MedalIcon height={24} />
            <S.TrendingText>Top movie this week</S.TrendingText>
          </S.TopTrending>
        )}
        <S.Title>{title}</S.Title>
        <S.Text>{year}</S.Text>
      </S.Info>
    </S.Container>
  );
};

export default MovieCard;
