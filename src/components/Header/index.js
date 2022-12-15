import React from 'react';
import { Link } from 'react-router-dom';

import { Search } from '../Search';

import {
  Container,
  Content,
  Logo
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <Link to={`/`}>
          <Logo>Movie Catalog</Logo>
        </Link>
        <Search />
      </Content>
    </Container>
  )
}