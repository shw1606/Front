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

// 시리즈에 공개하기 버튼
export const SeriesAddButton = styled.button`
  background: white;
  height: 3rem;
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(32, 201, 151);
  font-size: 1.125rem;
  font-weight: bold;
  cursor: pointer;
  svg {
    margin-right: 0.875rem;
  }
`;

export const SelectContainer = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 4px 0px;
  overflow: hidden;
`;

// 선택한 시리즈 wrapper
export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.125rem;
  line-height: 1;
  background: white;
  color: rgb(73, 80, 87);
`;

export const SelectItem = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const SelectButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  border: none;
  font-size: 1.25rem;
  outline: none;
  color: white;
  background: rgb(18, 184, 134);
  cursor: pointer;
`;

export const CancelButtonWrapper = styled.div`
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  color: rgb(255, 107, 107);
  padding: 0px;
  cursor: pointer;
`;
