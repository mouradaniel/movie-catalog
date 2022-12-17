import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

import {
  Container,
  Input,
  Button,
  Icon
} from './styles';

export function Search() {
  const { t } = useTranslation();

  const [term, setTerm] = useState("");

  return (
    <Container>
      <Input value={term} onChange={(event) => setTerm(event.target.value)} placeholder={t('search-placeholder')} />
      <Link to={`/search/${term}`}>
        <Button>
          <Icon />
        </Button>
      </Link>
    </Container>
  )
}