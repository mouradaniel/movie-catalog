import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 10px 40px;
`;

export const Title = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: #404040;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const Poster = styled.img`
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  color: #808080;
  font-size: 12px;
`;