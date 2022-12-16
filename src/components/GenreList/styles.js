import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #FF822E;
  padding: 0 10% 30px;
  margin-bottom: 30px;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  margin: 40px 0 20px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 20px 0 0;
  }
`;

export const FilterInfo = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 20px 0 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 12px;
    margin: 10px 0 5px;
  }
`;