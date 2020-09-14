import styled from "styled-components";

export const TocWrapper = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  float: right;
  top: 15rem;
  right: 10rem;
  width: 240px;
  line-height: 1.5;
  font-size: 0.875rem;
  max-height: calc(100vh - 128px);
  overflow-y: auto;
  overflow-x: hidden;
  border-left: 2px solid #E9ECEF;
  padding: 0.25em 0.75em;
  @media (max-width: 1600px) {
    right: 0;
  }
  @media (max-width: 1365px) {
    display: none;
  }
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
  color: ${props => props.active === true ?  '#212529' : '#868e96'};
  transform: ${props => props.active === true ?  'scale(1.05)' : ''};
`;
