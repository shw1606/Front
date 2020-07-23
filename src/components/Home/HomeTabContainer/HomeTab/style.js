import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainTabStyle = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 3rem;
  color: rgb(134, 142, 150);
  font-size: 0.9;
  text-decoration: none;
  svg {
    font-size: 0.9rem;
    margin-right: 0.5rem;
  }
  &.active {
    color: rgb(52, 58, 64);
    font-weight: bold;
  }
`;

export const TabBottomLine = styled.div`
  left: 0%;
  width: 50%;
  height: 2px;
  position: absolute;
  bottom: 0px;
  background: rgb(52, 58, 64);
`;
