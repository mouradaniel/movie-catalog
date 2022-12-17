import styled from "styled-components";

export const Container = styled.main`
  background: #FF822E;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  width: 30px;
  cursor: pointer;
  margin-left: 20px;
  border-radius: 20px;
`;

export const Flag = styled.img`
  width: 100%;
  border-radius: 5px;
  -webkit-filter: ${props => props.active ? "initial" : "grayscale(100%)"};
  filter: ${props => props.active ? "initial" : "grayscale(100%)"};
`;