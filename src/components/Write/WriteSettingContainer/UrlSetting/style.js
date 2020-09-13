import styled from "styled-components";

export const Layout = styled.section`
  margin-top: 1.5rem;
`;

// 섹션 별 제목
export const Title = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
`;

// url 인풋 wrapper
export const InputWrapper = styled.div`
  display: flex;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 0px 4px 0px;
  padding: 0.5rem 0.875rem;
  line-height: 1.5;
  .user-name {
    color: rgb(134, 142, 150);
  }
`;

// input
export const Input = styled.input`
  font-size: 1rem;
  background: none;
  outline: none;
  flex: 1 1 0%;
  border: none;
  padding: 0px;
  line-height: 1.5;
  color: rgb(52, 58, 64);
`;
