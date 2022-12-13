import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { GenreItem } from '../GenreItem';

import {
  Container,
  Content,
  Title
} from './styles';

export function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=28d5df611ec841cf9780851fb5c907f1")
        .then(({ data }) => {
          if (data.genres) {
            setGenres(data.genres)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    } catch (error) {
      console.log("Error on get a genre movies ", error)
    }
  }, [])

  if (!genres || !genres.length) {
    return <div></div>
  }

  return (
    <Container>
      <Title>A complete catalog of movies for all tastes! Explore now!</Title>
      <Content>
        {genres && genres.length && genres.map((genre) => {
          return (
            <GenreItem key={genre.id} name={genre.name} />
          )
        })}
      </Content>
    </Container>
  )
}