import styled, { css } from "styled-components";

export const Layout = styled.div`
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
`;

export const TagInput = styled.input`
  display: inline-flex;
  min-width: 8rem;
  margin-bottom: 0.75rem;
  font-size: 1.125rem;
  line-height: 2rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  cursor: text;
  @media (max-width: 767px) {
    line-height: 1.5rem;
    font-size: 0.75rem;
  }
`;

export const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  border-radius: 1rem;
  font-size: 1rem;
  background: rgb(241, 243, 245);
  color: rgb(12, 166, 120);
  cursor: pointer;
  transition: all 0.125s ease-in 0s;
  animation: 0.125s ease-in-out 0s 1 normal forwards running iMKika;
`;

export const ToastContainer = styled.div`
  display: block;
  width: 100%;
  color: rgb(73, 80, 87);
`;

export const Toast = styled.div`
  position: absolute;
  padding: 0.75rem;
  line-height: 1.5;
  font-size: 0.75rem;
  color: white;
  background: rgb(52, 58, 64);
  z-index: 20;
  visibility: hidden;
  transform: translateY(-1rem);
  transition: all 0.125s ease-in 0s;
  ${(props) =>
    props.visible &&
    css`
      visibility: visible;
      transform: translateY(0rem);
    `}
`;
