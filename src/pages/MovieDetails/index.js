import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import SearchContext from '../../context/Search';

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
  ReleaseDate
} from './styles';

export default function MovieDetails() {
  const { getMovieById } = useContext(SearchContext);

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    try {
      getMovieById(id)
        .then((movie) => {
          console.log('movie ', movie)
          setMovie(movie)
        })
        .catch((error) => {
          console.log("Error on get a movie by id ", error)
        })      
    } catch (error) {
      console.log("Error on get movie ", error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movie) {
    return <div>Loading movie...</div>
  }

  return (
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
          <ReleaseDate>Release date: {movie.release_date}</ReleaseDate>
        </DetailsContainer>
      </Content>
    </Container>
  );
}
  