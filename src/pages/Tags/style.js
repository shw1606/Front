import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledTagPageDiv = styled.div`
  display: flex;
  justify-content: center;
  .tag_wrapper {
    display: flex;
    position: relative;
  }
`;

export const StyledLinkForTab = styled(Link)`
  width: 8rem;
  height: 3rem;
  font-size: 1.125rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  text-decoration: none;
  color: rgb(134, 142, 150);

  ${(props) =>
    props.selected &&
    css`
      font-weight: bold;
      color: rgb(32, 201, 151);
    `};
`;

export const SelectionTrans = styled.div`
  width: 50%;
  height: 2px;
  display: block;
  position: absolute;
  bottom: 0px;
  background: rgb(32, 201, 151);
  transition: 0.15s ease;
  ${(props) =>
    props.selected &&
    css`
      transform: translateX(0rem);
    `};
  ${(props) =>
    !props.selected &&
    css`
      transform: translateX(8rem);
    `};
`;
