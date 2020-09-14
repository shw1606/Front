import styled, { css, keyframes } from "styled-components";

const UrlSlugAnimation = keyframes`
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
`;

// 전체적인 레이아웃
export const Layout = styled.section`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  width: 100%;
`;

// 섹션 별 제목
export const Title = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
`;

// 시리즈 팝업의 컨테이너 역할
export const SeriesPopupContainer = styled.div`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  overflow: hidden;
`;

// 시리즈 입력 인풋, 시리즈 url slug의 form
export const SeriesForm = styled.form`
  background: rgb(233, 236, 239);
  padding: 1rem;
  transition: all 0.125s ease-in 0s;
`;

// 시리즈 입력 인풋
export const SeriesInput = styled.input`
  height: 2rem;
  width: 100%;
  padding: 0.5rem;
  font-size: 0.875rem;
  border-radius: 2px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  color: rgb(52, 58, 64);
`;

// 입력했던 시리즈의 리스트
export const SeriesList = styled.ul`
  height: 16.5625rem;
  overflow-y: auto;
  padding-left: 0px;
  list-style: none;
  margin: 0px;
  background: white;
`;

// 입력했던 시리즈
export const SeriesItem = styled.li`
  padding: 0.875rem 1rem;
  font-size: 1rem;
  line-height: 1;
  color: rgb(73, 80, 87);
  border-bottom: 1px solid rgb(233, 236, 239);
  ${(props) =>
    props.focus &&
    css`
      background: rgb(18, 184, 134);
    `}
`;
