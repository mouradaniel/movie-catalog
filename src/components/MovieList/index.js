import React, { useContext } from 'react';

import { useTranslation } from "react-i18next";

import SearchContext from '../../context/Search';

import { MovieItem } from '../MovieItem';

import {
  Container,
  Content,
  Title
} from './styles';

export function MovieList({ page, title }) {
  const { movieList } = useContext(SearchContext);

  const { t } = useTranslation();

  if (!movieList.length) {
    return <div>Loading movies...</div>
  }

  return (
    <Container>
      <Title>{page === "home" ? title : `${t("results-for")} ${title}`}</Title>
      <Content>
        {movieList.map((movie) => {
          return (
            <MovieItem key={movie.id} movie={movie} />
          )
        })}
      </Content>
    </Container>
  )
}