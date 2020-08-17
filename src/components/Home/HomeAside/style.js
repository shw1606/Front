import styled from "styled-components";

export const StyledAsideBottom = styled.div`
  margin-top: 6.25rem;
  line-height: 1.5;
  font-size: 0.875rem;
`;

export const StyledAsideLinks = styled.div`
  color: rgb(134, 142, 150);
  a {
    color: inherit;
  }
`;

export const StyledCopyright = styled.div`
  color: rgb(173, 181, 189);
`;

export const StyledAside = styled.div`
  width: 12rem;
  @media (max-width: 945px) {
    display: none;
  }
  @media (min-width: 1440px) {
    width: 16rem;
  }
`;
