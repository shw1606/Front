import styled from "styled-components";

export const Layout = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 0px;
  padding: 2rem 3rem 0 3rem;
  @media (max-width: 767px) {
    padding: 1rem;
  }
`;
