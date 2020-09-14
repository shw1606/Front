import styled, { css } from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0px 1.125rem;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.background};
  outline: none;
  font-weight: bold;
  font-size: 1.125rem;
  color: white;
  cursor: pointer;
  &:first-child {
    margin-right: 0.875rem;
  }
  ${(props) => {
    if (props.seriesPopup) {
      return css`
        cursor: not-allowed;
        background: rgb(222, 226, 230);
        color: rgb(173, 181, 189);
      `;
    }
  }}
  ${(props) =>
    props.clickedList &&
    css`
      cursor: pointer;
      background: rgb(32, 201, 151);
      color: white;
    `}
`;
