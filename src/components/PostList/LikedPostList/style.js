import styled from "styled-components";

export const PostListLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 270px);
  justify-content: start;
  grid-template-rows: auto;
  margin-top: 2rem;
  @media (max-width: 1900px) {
    grid-template-columns: repeat(5, 270px);
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, calc((100% - 5rem)/4));
    justify-content: space-between;
  }
  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, calc((100% - 4rem)/3));
  }
  @media (max-width: 944px) {
    grid-template-columns: repeat(2, calc((100% - 3rem)/2));
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
