import styled from "styled-components";

export const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    animation: 0.5s ease 0s 1 normal forwards running bcCCNc;
  }
  .left {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    position: relative;
    min-width: 0px;
    z-index: 1;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.016) 0px 0px 8px;
  }
  .right {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    position: relative;
    min-width: 0px;
    background-color: rgb(251, 253, 252);
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
