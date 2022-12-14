import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useTranslation } from "react-i18next";

import SearchContext from '../../context/Search';

import { Shelf } from '../../components/Shelf';

import {
  Container,
  Content,
  ImageContainer,
  Image,
  DetailsContainer,
  Title,
  TitleInfos,
  Info,
  Resume,
  ReleaseDate,
  Shelfs
} from './styles';

export default function MovieDetails() {
  const { getMovieById, language } = useContext(SearchContext);

  const { id } = useParams();

  const { t } = useTranslation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    try {
      getMovieById(id)
        .then((movie) => {
          setMovie(movie)
          window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
        })
        .catch((error) => {
          console.log("Error on get a movie by id ", error)
        })      
    } catch (error) {
      console.log("Error on get movie ", error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language]);

  const getFormatedDate = (date) => {
    let options = {
      timeZone: 'America/Sao_Paulo',
      dateStyle: 'short'
    }

    return new Date(date).toLocaleDateString('pt-Br', options)
  }

  if (!movie) {
    return <div>Loading movie...</div>
  }

  return (
    <>
      <Container>
        <Content>
          <ImageContainer>
            <Image src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />
          </ImageContainer>
          <DetailsContainer>
            <Title>{movie.title}</Title>
            <TitleInfos>
              {movie.genres.map((genre, index) => {              
                return <Info key={genre.id}>{index !== 0 ? ' | ' : ''}{genre.name}</Info>
              })}
            </TitleInfos>
            <Resume>{movie.overview}</Resume>
            <ReleaseDate>{t("release-date")} {getFormatedDate(movie.release_date)}</ReleaseDate>
          </DetailsContainer>
        </Content>
      </Container>
      <Shelfs>
        <Shelf title={t("title-recommendations")} query={`3/movie/${movie.id}/recommendations`} />
        <Shelf title={t("title-similar")} query={`3/movie/${movie.id}/similar`} />
        <Shelf title={t("title-upcoming")} query={`3/movie/upcoming`} />
      </Shelfs>
    </>
  );
}
  