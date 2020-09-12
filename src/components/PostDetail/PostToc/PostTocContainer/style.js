import styled from "styled-components";

export const TocWrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  float: right;
  top: 45%;
  right: -20rem;
  border-left: 2px solid #E9ECEF;
  padding: 0.25em 0.75em;
`;

export const TocItem = styled.div`
  transition: 0.125s all ease-in;
  a {
    &:hover {
      color: #212529;
    }
    text-decoration: none;
    color: inherit;
  }
  & + & {
    margin-top: 4px;
  }
  margin-left: ${props => props.level * 1.2}em ;
  color: ${props => props.active === 1 ?  '#212529' : '#868e96'};
`;
