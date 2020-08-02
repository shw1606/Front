import styled from "styled-components";
import {Link} from "react-router-dom";


export const PostTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #343a40;
`;

export const PostInfo = styled.div`
  margin-top: 3rem;
  display: flex;
  span {
    margin: 0 0.5em;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  margin-right: 0.5em;
`;