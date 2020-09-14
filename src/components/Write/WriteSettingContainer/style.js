import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgb(248, 249, 250);
  z-index: 15;
  animation: 0.25s ease-in 0s 1 normal forwards running cdYrHg;
  @media (max-width: 767px) {
    align-items: flex-start;
    padding: 2rem 1rem;
    overflow: auto;
  }
`;

export const SettingContainer = styled.div`
  width: 768px;
  display: flex;
  @media (max-width: 1024px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  width: 1px;
  min-height: 425px;
  background: rgb(233, 236, 239);
  margin-left: 2rem;
  margin-right: 2rem;
  @media (max-width: 767px) {
    display: none;
  }
`;
