import styled from "styled-components";

export const Tag  = styled.a`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #404040;
  border-radius: 20px;
  background: #fff;
  padding: 10px 15px;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 5px 7.5px;
    margin: 5px;
  }
`;

export const Name = styled.span`
  color: #404040;
  font-size: 16px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;