import React from 'react';

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
      </Content>
    </Container>
  )
}