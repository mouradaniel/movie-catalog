import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";

import SearchContext from '../../context/Search';

import { MovieItem } from '../MovieItem';

import {
  Container,
  Content,
  Title
} from './styles';

export function Shelf({ query, title }) {
  const { API_URL, API_KEY, language } = useContext(SearchContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${API_URL}/${query}?${API_KEY}&language=${language}`)
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
  }, [language]);

  const settings = {
    infinite: true,
    speed: 500,
    variableWidth: true,
  };

  if (movies.length) {
    return (
      <Container>
        <Title>{title}</Title>
        <Content>
          <Slider {...settings}>
            {movies.map((movie) => {
              return (
                <MovieItem key={movie.id} movie={movie} />
              )
            })}
          </Slider>
        </Content>
      </Container>
    )
  }
}