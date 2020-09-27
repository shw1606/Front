import styled from 'styled-components';

export const SeriesPostLayout = styled.section`
  margin-top: 5rem;
`;
export const SeriesHeading = styled.h2`
  span {
    font-size: 16px;
    font-style: italic;
    color: #adb5bd;
  }
  a {
    font-size: 16px;
    color: #495057;
    font-weight: bold;
  }
`;

export const SeriesContent = styled.div`
  display: flex;
  margin-top: 1rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const PostImageWrapper = styled.div`
  a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
  }
  img {
    width: 144px;
    height: 75px;
    object-fit: cover;
  }
  @media (max-width: 768px) {
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
  }
`;

export const SeriesDetail = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    color: #495057;
  }
  div {
    font-size: 10.5px;
    color: #adb5bd;
    margin-top: auto;
  }
`;

