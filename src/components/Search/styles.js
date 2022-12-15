import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export const Container  = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 15px 20px;
  border-radius: 20px;
`;

export const Input = styled.input`
  border: none;
  outline: none;
`;

export const Button = styled.a`
  display: flex;
  cursor: pointer;
`

export const Icon = styled(FaSearch)`
  color: #EF5411;
`