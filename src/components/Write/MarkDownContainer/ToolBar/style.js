import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: auto;
  top: 0px;
  margin-bottom: 1rem;
  z-index: 10;
  background: white;
  transition: all 0.125s ease-in 0s;
  @media (max-width: 767px) {
    flex-wrap: unset;
    overflow-x: auto;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  padding: 0px;
  background: none;
  font-size: 1.75rem;
  color: rgb(134, 142, 150);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 1px;
  height: 1.25rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  background: rgb(206, 212, 218);
`;
