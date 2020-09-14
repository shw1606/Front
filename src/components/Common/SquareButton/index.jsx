import styled from "styled-components";

const SquareButton = styled.button`
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  padding-top: 0px;
  padding-bottom: 0px;
  height: 2rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  font-size: 1rem;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 4px;
  color: white;
  background: rgb(18, 184, 134);

  ${(props) =>
    props.color === "teal" &&
    `
    color: white;
    background: rgb(18, 184, 134);
    `};
  ${(props) =>
    props.color === "red" &&
    `
    color: white;
    background: rgb(255, 107, 107);
    `};
  ${(props) =>
    props.color === "transparent" &&
    `
    color: rgb(18, 184, 134);
    background: white;
    `};
`;

export default SquareButton;
