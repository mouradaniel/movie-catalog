import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  
  @media (min-width: 768px) {
    width: 40%;
    margin-right: 30px;
  }
`;

export const Image = styled.img`
  border: 5px solid #fff;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  color: #fff;
  
  @media (min-width: 768px) {
    width: 60%;
  }
`;

export const Title = styled.h2`
  text-transform: uppercase;
`;

export const TitleInfos = styled.div`
  margin-bottom: 20px;
`;

export const Info = styled.span`
  font-size: 12px;
`;

export const Resume = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

export const ReleaseDate = styled.p`
  font-size: 22px;
`;

export const Shelfs = styled.div`
`;
