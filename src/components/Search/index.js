import { t } from 'i18next';
import React, { useContext, useState } from 'react';

import SearchContext from '../../context/Search';

import { useTranslation } from "react-i18next";

import {
  Container,
  Input,
  Button,
  Icon
} from './styles';

export function Search() {
  const { getMovieListByTerm } = useContext(SearchContext);

  const { t } = useTranslation();

  const [term, setTerm] = useState("");

  return (
    <Container>
      <Input value={term} onChange={(event) => setTerm(event.target.value)} placeholder={t('search-placeholder')} />
      <Button onClick={() => getMovieListByTerm(term)}>
        <Icon />
      </Button>
    </Container>
  )
}