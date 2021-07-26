import React from 'react';
import StarRating from 'react-native-star-rating';

import * as S from './styles';

interface StarProps {
  isFirst?: boolean;
  rating: number;
}

const Stars: React.FC<StarProps> = ({ isFirst, rating }) => {
  return (
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
  );
};

export default Stars;
