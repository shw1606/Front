import styled, { keyframes } from "styled-components";

const UrlSlugAnimation = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`;

// 시리즈 url slug 컨테이너
export const Layout = styled.div`
  margin-top: 0.5rem;
  animation-duration: 0.125s;
  animation-timing-function: ease-out;
  animation-name: ${UrlSlugAnimation};
  animation-fill-mode: forwards;
  visibility: hidden;
`;

// slug input의 wrapper
export const UrlSlugInputWrapper = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  padding: 0.5rem;
  font-size: 0.75rem;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  background: white;
  color: rgb(134, 142, 150);
`;

// url slug input
export const UrlSlugInput = styled.div`
  color: rgb(52, 58, 64);
  flex: 1 1 0%;
  outline: none;
  border: none;
  font-size: inherit;
`;

// url slug 버튼 wrapper
export const UrlSlugButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
`;

// slug 버튼
export const UrlSlugButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0px 1.25rem;
  height: 2rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1rem;
  color: white;
  background: ${(props) => props.background};
  outline: none;
  border: none;
  cursor: pointer;
  &:first-child {
    margin-right: 0.5rem;
  }
`;
