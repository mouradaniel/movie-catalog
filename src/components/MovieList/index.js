import React, { useContext } from 'react';

import SearchContext from '../../context/Search';

import { MovieItem } from '../MovieItem';

import {
  Container,
  Content,
  Title
} from './styles';

export function MovieList() {
  const { listTitle, movieList } = useContext(SearchContext);

  if (!movieList.length) {
    return <div>Loading movies...</div>
  }

  return (
    <Container>
      <Title>{listTitle}</Title>
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