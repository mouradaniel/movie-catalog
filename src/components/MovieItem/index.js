import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Title,
  Poster,
  Overview
} from './styles';

export function MovieItem({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <Container>
        <Title title={movie.title}>{movie.title}</Title>
        <Poster src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
        <Overview title={movie.overview}>{movie.overview}</Overview>      
      </Container>
    </Link>
  )
}