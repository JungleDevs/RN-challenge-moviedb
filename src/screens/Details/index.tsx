import React, { useCallback, useEffect, useRef } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import MedalIcon from '../../assets/svg/medal.svg';
import {
  selectCurrentMovie,
  selectGenres,
  selectMovies,
} from '../../slices/movies';
import * as S from './styles';
import Stars from '../../components/Stars';
import MovieCard from '../../components/MovieCard';
import { Movie } from '../../services/api';

const Details: React.FC = () => {
  const {
    image,
    title,
    year,
    genres,
    overview,
    isFirst = false,
    rating,
  } = useSelector(selectCurrentMovie);
  let trendingMovies = useSelector(selectMovies);
  const idx = trendingMovies.findIndex(item => item.title === title);
  if (idx >= 0) {
    trendingMovies = trendingMovies.slice(0, 6);
    trendingMovies.splice(idx, 1);
  } else trendingMovies = trendingMovies.slice(0, 5);

  const allGenres = useSelector(selectGenres);
  const navigation = useNavigation();
  const ref = useRef<ScrollView>(null);

  useEffect(() => {
    if (ref.current) ref.current.scrollTo({ x: 0, y: 0 });
  }, [image]);

  const renderItem = useCallback(
    (item: Movie, index: number) => {
      const {
        isFirst: first,
        poster_path,
        title: movieTitle,
        release_date,
        vote_average,
        overview: movieOverview,
        genre_ids,
        id: movieId,
      } = item;
      const mainGenres = genre_ids.slice(0, 2);
      const names: string[] = [];
      mainGenres.forEach(num => {
        allGenres.forEach(genre => {
          const { id, name } = genre;
          if (num === id) names.push(name);
        });
      });
      return (
        <View
          key={movieId}
          style={{ marginBottom: index + 1 === trendingMovies.length ? 8 : 0 }}
        >
          <MovieCard
            isFirst={first}
            image={poster_path ?? ''}
            title={movieTitle}
            year={release_date?.split('-')[0]}
            genres={names}
            rating={vote_average / 2}
            overview={movieOverview}
          />
        </View>
      );
    },
    [trendingMovies, allGenres],
  );

  return (
    <ScrollView ref={ref}>
      <View>
        <S.Banner
          source={{ uri: `https://image.tmdb.org/t/p/w342${image}` }}
          resizeMode="cover"
        >
          <S.Overlay
            colors={[
              'rgba(20, 23, 51, 0.0001)',
              'rgba(9, 11, 25, 0.8406)',
              '#070818',
            ]}
          >
            <S.GoBack onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={30} color="#fff" />
            </S.GoBack>
            <S.DetailsContainer>
              {isFirst && <S.Text>Top movie of the week</S.Text>}
              <S.TopMovie>
                {isFirst && <MedalIcon height={42} />}
                <S.Title isFirst={isFirst}>{title}</S.Title>
              </S.TopMovie>
              <S.SmallText>
                {year} . {!!genres[0] && genres[0]}{' '}
                {!!genres[1] && `/ ${genres[1]}`}
              </S.SmallText>
              <S.Text>{overview}</S.Text>
              <Stars rating={rating} />
            </S.DetailsContainer>
          </S.Overlay>
        </S.Banner>
      </View>
      <S.Trending>
        <S.TrendingTitle>Also Trending</S.TrendingTitle>
        {trendingMovies.map(renderItem)}
      </S.Trending>
    </ScrollView>
  );
};

export default Details;
