/* eslint-disable react/no-unused-prop-types */
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  View,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import search from '../../assets/icons/search.png';
import MovieCard from '../../components/MovieCard';
import { getTrendingMovies, Movie, getGenres, Genre } from '../../services/api';
import * as S from './styles';

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isSearching, setIsSearching] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);

  const fetchData = useCallback(async () => {
    setRefresh(true);
    try {
      const { data } = await getTrendingMovies();
      const { data: result } = await getGenres();
      setMovies(data.results);
      setGenres(result.genres);
      setLoading(false);
      setRefresh(false);
    } catch (e) {
      Alert.alert('Atenção', e.message);
      setLoading(false);
      setRefresh(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const headerComponent = useMemo(
    () =>
      isSearching ? (
        <S.SearchContainer>
          <S.TextInput value={searchText} onChangeText={setSearchText} />
          <TouchableOpacity
            onPress={() => {
              setIsSearching(false);
              setSearchText('');
            }}
          >
            <Icon name="x-circle" size={30} color="#CDCED1" />
          </TouchableOpacity>
        </S.SearchContainer>
      ) : (
        <S.Header>
          <S.Title>Top Movies</S.Title>
          <TouchableOpacity onPress={() => setIsSearching(true)}>
            <S.Search source={search} />
          </TouchableOpacity>
        </S.Header>
      ),
    [isSearching, searchText],
  );

  const renderItem = useCallback(
    ({ item, index }: { item: Movie; index: number }) => {
      const mainGenres = item.genre_ids.slice(0, 2);
      const names: string[] = [];
      mainGenres.forEach(num => {
        genres.forEach(genre => {
          if (num === genre.id) names.push(genre.name);
        });
      });
      return (
        <View style={{ marginBottom: index + 1 === movies.length ? 8 : 0 }}>
          <MovieCard
            isFirst={index === 0}
            image={item.poster_path ?? ''}
            title={item.title}
            year={item.release_date.split('-')[0]}
            genres={names}
            rating={item.vote_average / 2}
          />
        </View>
      );
    },
    [movies.length, genres],
  );

  const emptyComponent = () => (
    <S.LoadingContainer>
      <S.Button
        onPress={() => {
          setLoading(true);
          fetchData();
        }}
      >
        <S.ButtonText>Try Again</S.ButtonText>
      </S.Button>
    </S.LoadingContainer>
  );

  return (
    <S.Container>
      <SafeAreaView />
      {loading ? (
        <S.LoadingContainer>
          <ActivityIndicator />
        </S.LoadingContainer>
      ) : (
        <FlatList
          data={movies}
          renderItem={renderItem}
          ListHeaderComponent={headerComponent}
          ListEmptyComponent={emptyComponent}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              tintColor="#CDCED1"
              colors={['#CDCED1']}
              refreshing={refresh}
              onRefresh={fetchData}
            />
          }
        />
      )}
    </S.Container>
  );
};

export default Trending;
