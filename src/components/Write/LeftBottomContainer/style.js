import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 50vw;
  height: 4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  background: rgba(255, 255, 255, 0.85);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  cursor: pointer;
  background: none;
  outline: none;
  svg {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
  span {
    font-size: 1.125rem;
  }
`;

export const ButtonsWrapper = styled.div`
  justify-content: flex-end;
  align-items: center;
  button:last-child {
    margin-left: 0.75rem;
  }
`;

export const RightButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  height: 2.5rem;
  color: ${(state) => (state.color === "save" ? "black" : "white")};
  font-weight: bold;
  font-size: 1.125rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  cursor: pointer;
  outline: none;
  background: ${(state) =>
    state.color === "save" ? "rgb(233, 236, 239)" : "rgb(18, 184, 134)"};
  border-radius: 4px;
`;
