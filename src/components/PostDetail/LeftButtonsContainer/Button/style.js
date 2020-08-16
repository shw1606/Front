import styled from "styled-components";

export const ButtonWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: rgb(134, 142, 150);
  cursor: pointer;
  z-index: 5;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(173, 181, 189);
  border-image: initial;
  border-radius: 1.5rem;
  svg {
    width: 24px;
    height: 24px;
  }
`;
