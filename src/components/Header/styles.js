import styled from "styled-components";

export const Container = styled.main`
  background: #EF5411;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const Logo = styled.h1`
  color: #fff;
  font-size: 16px;
`;