import styled from "styled-components";

export const Layout = styled.div`
  width: 768px;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const Title = styled.h1`
  line-height: 1.5;
  font-size: 3rem;
  margin-top: 0px;
  margin-bottom: 3rem;
  color: rgb(52, 58, 64);
`;
