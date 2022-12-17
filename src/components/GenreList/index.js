import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';

import SearchContext from '../../context/Search';

import { useTranslation } from "react-i18next";

import { GenreItem } from '../GenreItem';

import {
  Container,
  Content,
  Title,
  FilterInfo
} from './styles';

export function GenreList() {
  const { API_URL, API_KEY, language } = useContext(SearchContext);

  const { t } = useTranslation();

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    try {
      axios.get(`${API_URL}3/genre/movie/list?${API_KEY}&language=${language}`)
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
  }, [language])

  if (!genres || !genres.length) {
    return <div></div>
  }

  return (
    <Container>
      <Title>{t("title")}</Title>
      <FilterInfo>{t("filter-info")}</FilterInfo>
      <Content>
        {genres && genres.length && genres.map((genre) => {
          return (
            <GenreItem key={genre.id} genre={genre} />
          )
        })}
      </Content>
    </Container>
  )
}