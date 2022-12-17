import { useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";

import SearchContext from '../../context/Search';

import { MovieList } from '../../components/MovieList';

import {
  Container,
  Content
} from './styles';

export default function Search() {
  const { getMovieListByTerm } = useContext(SearchContext);

  const { id } = useParams();

  useEffect(() => {
    getMovieListByTerm(id)
  }, [id]);

  return (
    <Container>
      <Content>
        <MovieList page="search" title={id} />
      </Content>
    </Container>
  );
}
  