import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import SearchContext from '../../context/Search';

import { MovieItem } from '../MovieItem';

import {
  Container,
  Content,
  Title
} from './styles';

export function Shelf({ query, title }) {
  const { API_URL, API_KEY } = useContext(SearchContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${API_URL}/${query}?${API_KEY}`)
        .then(({ data }) => {
          if (data.results) {
            setMovies(data.results)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log("Error on get movies to shelf ", error)
    }
  }, []);

  if (!movies.length) {
    return <div>Loading movies...</div>
  }

  return (
    <Container>
      <Title>{title}</Title>
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