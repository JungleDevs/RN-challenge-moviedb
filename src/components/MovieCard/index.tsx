import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';

import MedalIcon from '../../assets/svg/medal.svg';
import * as S from './styles';

interface CardProps {
  image: string;
  isFirst?: boolean;
  title: string;
  genres: string[];
  year: string;
  rating: number;
}

const MovieCard: React.FC<CardProps> = ({
  image,
  title,
  year,
  isFirst,
  genres,
  rating,
}) => {
  return (
    <S.Container isFirst={isFirst ?? false}>
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
        <S.StarsContainer isFirst={isFirst ?? false}>
          <StarRating
            containerStyle={{
              width: 100,
              marginRight: 10,
            }}
            starSize={16}
            fullStarColor="#FFD706"
            emptyStarColor="#FFD706"
            disabled
            maxStars={5}
            rating={rating}
          />
          <S.StarsNUmber>{rating.toFixed(1)}/5</S.StarsNUmber>
        </S.StarsContainer>
      </S.Info>
    </S.Container>
  );
};

export default MovieCard;
