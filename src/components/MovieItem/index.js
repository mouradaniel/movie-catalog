import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  Poster
} from './styles';

export function MovieItem({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Container>
        <Poster src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        <Title title={movie.title}>{movie.title}</Title>
      </Container>
    </Link>
  )
}