import React from 'react';

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
        <Logo>Movie Catalog</Logo>
        <Search />
      </Content>
    </Container>
  )
}