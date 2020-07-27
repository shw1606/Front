import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  flex: 1 1 0%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  @media (max-width: 767px) {
    margin: 0px;
  }
`;
