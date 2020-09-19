import styled from "styled-components";

export const Layout = styled.section`
  outline: none;
  border: none;
  .content {
    display: flex;
  }
`;

// 섹션 별 제목
export const Title = styled.h3`
  font-size: 1.3125rem;
  color: rgb(52, 58, 64);
  line-height: 1.5;
  margin-bottom: 0.5rem;
  margin-top: 0px;
`;

// [전체 공개], [비공개] 버튼
export const Button = styled.button`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 1 0%;
  margin-right: 1rem;
  padding: 0px 0px 0px 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.125rem;
  background: white;
  color: ${(props) =>
    (props.setting ? "rgb(32, 201, 151)" : "rgb(134, 142, 150)")};
  border: 1px solid
    ${(props) => (props.setting ? "rgb(32, 201, 151)" : "transparent")};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px;
  outline: none;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 0%;
  }
`;
