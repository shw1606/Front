import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
  }
  75% {
    opacity: 1;
    transform: translateY(-16px) scale(1.0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
}`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translateY(400px) scale(0.75);
}`;

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 25;
  background: rgba(235, 235, 235, 0.4);
`;

export const ModalContainer = styled.div`
  width: 25rem;
  border-radius: 4px;
  background: white;
  padding: 2rem 1.5rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
  ${(props) =>
    (props.visible
      ? css`
          animation: ${fadeIn} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${fadeOut} 0.2s forwards ease-in-out;
        `)}
`;

export const Title = styled.h3`
  margin: 0px;
  font-size: 1.5rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  font-weight: bold;
`;

export const Message = styled.div`
  line-height: 1.5;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  margin-top: 1rem;
  margin-bottom: 1rem;
  white-space: pre-wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
  ${(props) =>
    props.color === "green" &&
    css`
      background: rgb(18, 184, 134);
      color: white;
    `}
  &:first-child {
    margin-right: 0.75rem;
  }
`;
