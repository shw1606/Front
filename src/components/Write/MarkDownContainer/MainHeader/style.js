import styled from "styled-components";

export const Layout = styled.div`
  max-height: 360px;
  opacity: 1;
`;

export const Textarea = styled.textarea`
  height: 66px;
  display: block;
  font-size: 2.75rem;
  width: 100%;
  resize: none;
  line-height: 1.5;
  font-weight: bold;
  color: rgb(33, 37, 41);
  padding: 0px;
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
`;

export const TagsContainer = styled.div`
  color: rgb(52, 58, 64);
  font-size: 1.125rem;
  display: flex;
  flex-wrap: wrap;
  input {
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
  }
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
  &.show {
    visibility: visible;
    transform: translateY(0rem);
  }
`;
