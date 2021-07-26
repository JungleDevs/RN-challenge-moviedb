/* eslint-disable react/no-unused-prop-types */
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert,
  RefreshControl,
} from 'react-native';
import { debounce, isEmpty } from 'lodash';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';

import search from '../../assets/icons/search.png';
import { MovieCard, Pagination } from '../../components';
import {
  getTrendingMovies,
  Movie,
  getGenres,
  searchMovies,
} from '../../services/api';
import * as S from './styles';
import {
  selectGenres,
  selectMovies,
  setGenres,
  setMovies as setMoviesList,
} from '../../slices/movies';

const Trending: React.FC = () => {
  const [movies, setMovies] = useState(useSelector(selectMovies));
  const genres = useSelector(selectGenres);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(1);

  const ref = useRef<FlatList>(null);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    setRefresh(true);
    try {
      const { data } = await getTrendingMovies();
      const { data: result } = await getGenres();
      data.results[0].isFirst = true;
      dispatch(setMoviesList(data.results));
      setMovies(data.results);
      dispatch(setGenres(result.genres));
      setLoading(false);
      setRefresh(false);
    } catch (e) {
      Alert.alert('Sorry', e.message);
      setLoading(false);
      setRefresh(false);
    }
  }, [dispatch]);

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
          setPage(1);
        }

        setLoadingSearch(false);
      } catch (e) {
        Alert.alert('Sorry', e.message);
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
              placeholder="Digite aqui..."
              placeholderTextColor="#CDCED1"
              autoFocus
            />
            <TouchableOpacity
              style={{ padding: 4 }}
              onPress={() => {
                fetchData();
                setIsSearching(false);
                setSearchText('');
                setPage(1);
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
          <TouchableOpacity
            style={{ padding: 4 }}
            onPress={() => setIsSearching(true)}
          >
            <S.Search source={search} />
          </TouchableOpacity>
        </S.Header>
      ),
    [isSearching, searchText, searchQuery, fetchData, loadingSearch],
  );

  const renderItem = useCallback(
    ({ item }: { item: Movie }) => {
      const {
        isFirst,
        poster_path,
        title,
        release_date,
        vote_average,
        overview,
        genre_ids,
      } = item;
      const mainGenres = genre_ids.slice(0, 2);
      const names: string[] = [];
      mainGenres.forEach(num => {
        genres.forEach(genre => {
          const { id, name } = genre;
          if (num === id) names.push(name);
        });
      });
      return (
        <MovieCard
          isFirst={isFirst}
          image={poster_path ?? ''}
          title={title}
          year={release_date?.split('-')[0]}
          genres={names}
          rating={vote_average / 2}
          overview={overview}
        />
      );
    },
    [genres],
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

  const scrollToTop = () => {
    ref.current?.scrollToOffset({ offset: 0 });
  };

  return (
    <S.Container>
      <SafeAreaView />
      {loading ? (
        <S.LoadingContainer>
          <ActivityIndicator color="#CDCED1" />
        </S.LoadingContainer>
      ) : (
        <>
          <FlatList
            ref={ref}
            data={movies}
            renderItem={renderItem}
            ListHeaderComponent={headerComponent}
            ListEmptyComponent={emptyComponent}
            ListFooterComponent={
              <Pagination
                page={page}
                setPage={setPage}
                setMovies={setMovies}
                scrollToTop={scrollToTop}
                isSearching={isSearching}
                searchText={searchText}
              />
            }
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
        </>
      )}
    </S.Container>
  );
};

export default Trending;
