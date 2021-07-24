import { isEmpty } from 'lodash';
import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getTrendingMovies, Movie, searchMovies } from '../../services/api';

import * as S from './styles';

interface PaginationProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  scrollToTop: () => void;
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  isSearching: boolean;
  searchText: string;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  scrollToTop,
  setMovies,
  isSearching,
  searchText,
}) => {
  const [max, setMax] = useState('1000');

  const changePage = useCallback(async () => {
    let response;
    try {
      if (!isSearching) {
        const { data } = await getTrendingMovies(page);
        if (page === 1) data.results[0].isFirst = true;
        response = data.results;
        setMax('1000');
      } else {
        const { data } = await searchMovies(searchText, page);
        if (isEmpty(data.results)) return;
        response = data.results.sort((a, b) => b.popularity - a.popularity);
        setMax(data.total_pages.toString());
      }
      setMovies(response);
      scrollToTop();
    } catch (e) {
      Alert.alert('Sorry', e.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  useEffect(() => {
    changePage();
  }, [page, changePage]);

  return (
    <S.Container>
      <TouchableOpacity
        onPress={() => {
          setPage(page - 1);
        }}
        disabled={page === 1}
      >
        <Icon
          name="chevron-left"
          size={28}
          color={page === 1 ? 'grey' : '#CDCED1'}
        />
      </TouchableOpacity>
      <S.Text>
        {page} / {max}
      </S.Text>
      <TouchableOpacity
        onPress={() => {
          setPage(page + 1);
        }}
        disabled={page.toString() === max}
      >
        <Icon
          name="chevron-right"
          size={28}
          color={page.toString() === max ? 'grey' : '#CDCED1'}
        />
      </TouchableOpacity>
    </S.Container>
  );
};

export default Pagination;
