import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4rem 0 4rem;
  margin-top: 5.5rem;

  @media (max-width: 1024px) {
    margin-top: 2rem;
    padding: 0 2rem 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 0.5rem 0 0.5rem;
  }
`;
