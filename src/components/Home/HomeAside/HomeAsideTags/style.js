import styled from "styled-components";

export const StyledTagsWrapper = styled.section`
  margin-top: 4rem;
`;

export const StyledTagsTitle = styled.h4`
  line-height: 1.5;
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  margin-top: 0px;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const StyledTagLIst = styled.ul`
  list-style: none;
  li + li {
    margin-top: 0.25rem;
  }
`;

export const StyledMore = styled.li`
  a {
    color: rgb(134, 142, 150);
    text-decoration: underline;
    :hover {
      color: rgb(204, 204, 204);
    }
  }
`;

export const StyledTagItem = styled.li`
  box-sizing: inherit;
  color: rgb(73, 80, 87);
  line-height: 1.5;
  font-size: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;
