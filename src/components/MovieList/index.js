import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MovieItem } from '../MovieItem';

import {
  Container,
  Content,
  Title
} from './styles';

export function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=28d5df611ec841cf9780851fb5c907f1")
        .then(({ data }) => {
          if (data.results) {
            setMovies(data.results)
          }
        })
        .catch((error) => {
          console.log(error)
        })      
    } catch (error) {
      console.log("Error on get a popular movies ", error)
    }
  }, [])

  if (!movies.length) {
    return <div>Loading movies...</div>
  }

  return (
    <Container>
      <Title>Popular Movies</Title>
      <Content>
        {movies.map((movie) => {
          return (
            <MovieItem key={movie.id} movie={movie} />
          )
        })}
      </Content>
    </Container>
  )
}