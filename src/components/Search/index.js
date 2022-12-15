import React, { useContext, useState } from 'react';

import SearchContext from '../../context/Search';

import {
  Container,
  Input,
  Button,
  Icon
} from './styles';

export function Search() {
  const { getMovieListByTerm } = useContext(SearchContext);

  const [term, setTerm] = useState("");

  return (
    <Container>
      <Input value={term} onChange={(event) => setTerm(event.target.value)} placeholder="Type your movie..." />
      <Button onClick={() => getMovieListByTerm(term)}>
        <Icon />
      </Button>
    </Container>
  )
}