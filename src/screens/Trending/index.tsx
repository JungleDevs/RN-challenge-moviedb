import React, { useState, useEffect, useCallback } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  Text,
} from 'react-native';

import search from '../../assets/icons/search.png';
import { getTrendingMovies, Movie } from '../../services/api';
import * as S from './styles';

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchMovies = async () => {
    const { data } = await getTrendingMovies();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const renderItem = useCallback(
    ({ item, index }: { item: Movie; index: number }) => {
      return (
        <View>
          <Text style={{ color: '#fff' }}>{item.title}</Text>
        </View>
      );
    },
    [],
  );

  return (
    <S.Container>
      <SafeAreaView />
      <S.Header>
        <S.Title>Top Movies</S.Title>
        <TouchableOpacity>
          <S.Search source={search} />
        </TouchableOpacity>
      </S.Header>
      <S.Content>
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </S.Content>
    </S.Container>
  );
};

export default Trending;
