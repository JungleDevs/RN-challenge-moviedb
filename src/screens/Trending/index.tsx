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
import { debounce, isEmpty } from 'lodash';
import Icon from 'react-native-vector-icons/Feather';

import search from '../../assets/icons/search.png';
import MovieCard from '../../components/MovieCard';
import {
  getTrendingMovies,
  Movie,
  getGenres,
  Genre,
  searchMovies,
} from '../../services/api';
import * as S from './styles';

const Trending: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const fetchData = useCallback(async () => {
    setRefresh(true);
    try {
      const { data } = await getTrendingMovies();
      const { data: result } = await getGenres();
      data.results[0].isFirst = true;
      setMovies(data.results);
      setGenres(result.genres);
      setLoading(false);
      setRefresh(false);
    } catch (e) {
      Alert.alert('Sorry', e.message);
      setLoading(false);
      setRefresh(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchQuery = useCallback(
    debounce(async (text: string) => {
      try {
        if (!text) {
          setLoadingSearch(false);
          return;
        }
        const {
          data: { results },
        } = await searchMovies(text);

        if (isEmpty(results)) Alert.alert('Sorry', 'Nothing was found');
        else {
          const popularity = results.sort(
            (a, b) => b.popularity - a.popularity,
          );
          setMovies(popularity);
        }

        setLoadingSearch(false);
      } catch (e) {
        setLoadingSearch(false);
      }
    }, 500),
    [],
  );

  const headerComponent = useMemo(
    () =>
      isSearching ? (
        <>
          <S.SearchContainer>
            <S.TextInput
              value={searchText}
              onChangeText={text => {
                setLoadingSearch(true);
                setSearchText(text);
                searchQuery(text);
              }}
            />
            <TouchableOpacity
              onPress={() => {
                fetchData();
                setIsSearching(false);
                setSearchText('');
              }}
            >
              <Icon name="x-circle" size={30} color="#CDCED1" />
            </TouchableOpacity>
          </S.SearchContainer>
          {loadingSearch && (
            <ActivityIndicator style={{ marginBottom: 16 }} color="#CDCED1" />
          )}
        </>
      ) : (
        <S.Header>
          <S.Title>Top Movies</S.Title>
          <TouchableOpacity onPress={() => setIsSearching(true)}>
            <S.Search source={search} />
          </TouchableOpacity>
        </S.Header>
      ),
    [isSearching, searchText, searchQuery, fetchData, loadingSearch],
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
            isFirst={item.isFirst}
            image={item.poster_path ?? ''}
            title={item.title}
            year={item.release_date?.split('-')[0]}
            genres={names}
            rating={item.vote_average / 2}
          />
        </View>
      );
    },
    [movies, genres],
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
          <ActivityIndicator color="#CDCED1" />
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
              onRefresh={
                isSearching ? () => searchQuery(searchText) : fetchData
              }
            />
          }
        />
      )}
    </S.Container>
  );
};

export default Trending;
