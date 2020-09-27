import styled from "styled-components";

export const SeriesCardWrapper = styled.div`
  width: 48%;
  @media (max-width: 944px) {
    width: 100%;
  }
  a {
    color: #495057;
    margin-top: 0.5rem;
    font-size: 1.3rem;
  }
  margin-bottom: 2rem;
`;

export const SeriesThumbnail = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  position: relative;
  width: 100%;
  padding-top: 52.1921%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

export const SeriesSubInfo = styled.div`
  display: flex;
  margin-top: 0.5em;
  div {
    margin-right: 0.5em;
  }
`;

export const SeriesUpdatedAt = styled.div`
  color: #868e96;
`;
