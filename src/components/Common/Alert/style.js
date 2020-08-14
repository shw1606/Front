import styled from "styled-components";

export const Layout = styled.div`
  z-index: 9999;
  padding: 4px;
  width: 320px;
  box-sizing: border-box;
  color: #fff;
`;

export const Conatainer = styled.div`
  position: relative;
  min-height: 64px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: 8px;
  border-radius: 1px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  max-height: 800px;
  overflow: hidden;
  font-family: sans-serif;
  cursor: pointer;
  direction: ltr;
  background: ${(props) => props.backgroundColor};
  width: 100%;
`;

export const AlertText = styled.div`
  margin: auto 0;
  flex: 1 1;
`;

export const CloseBtn = styled.button`
  color: #fff;
  font-weight: 700;
  font-size: 14px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  align-self: flex-start;
`;

export const ProgressBar = styled.div`
  animation: Toastify__trackProgress 2.9s linear 1 forwards;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  z-index: 9999;
  background-color: hsla(0, 0%, 100%, 0.7);
  transform-origin: left;
  @keyframes Toastify__trackProgress {
    0% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }
`;
