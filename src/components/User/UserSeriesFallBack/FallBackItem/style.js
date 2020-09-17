import styled from 'styled-components';

export const SeriesCardWrapper = styled.div`
  width: 48%;
  @media (max-width: 944px) {
    width: 100%;
  }
  margin-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  padding-top: 52.1921%;
  background: #f2f2f2;
  border-radius: 4px;
`;

export const Image = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const Title = styled.div`
  margin-top: 0.5rem;
  height: 1.3rem; 
  width: 60%;
  border-radius: 4px;
  color: blue;
  background: #f2f2f2;
`;

export const SeriesSubInfo = styled.div`
  display: flex;
  margin-top: 0.5em;
  height: 1rem;
  div {
    border-radius: 4px;
    margin-right: 0.7rem;
  }
`;

export const Posts = styled.div`
  width: 30%;
  background: #f2f2f2;
`;

export const UpdatedAt = styled.div`
  width: 50%;
  background: #f2f2f2;
`;
