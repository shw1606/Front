import styled from "styled-components";

export const StyledNoticeTitle = styled.h4`
  line-height: 1.5;
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  margin-top: 0px;
  margin-bottom: 1rem;
  font-weight: bold;
  border-bottom: 1px solid rgb(233, 236, 239);
`;

export const StyledNoticeList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 1rem;
  li + li {
    margin-top: 1rem;
  }
`;

export const Styledli = styled.li`
  box-sizing: inherit;
`;

export const StyledListh5 = styled.h5`
  font-size: 1.125rem;
  line-height: 1.5;
  color: rgb(52, 58, 64);
  margin: 0px;
  font-weight: bold;
  a {
    color: inherit;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const StyledDate = styled.div`
  color: rgb(134, 142, 150);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
