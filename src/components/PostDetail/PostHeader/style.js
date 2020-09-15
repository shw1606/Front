import styled from "styled-components";
import {Link} from "react-router-dom";

export const PostTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #343a40;
  @media (max-width: 1024px) {
    font-size: 1.2em;
  }
`;

export const PostInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  height: 1.5rem;
  span {
    margin: 0 0.5em;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  margin-right: 0.5em;
  &:hover {
    border-bottom: 1px solid #343a40;
    color: #343a40;
  }
`;