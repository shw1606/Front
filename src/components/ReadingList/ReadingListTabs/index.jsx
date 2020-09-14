import React from 'react';
import * as S from "./style";

const ReadingListTabs = ({ type }) => {
  return (
    <S.TabsWrapper>
      <S.Tab to="/lists/liked" active={type === "liked" ? 1 : 0}>
        좋아한 포스트
      </S.Tab>
      <S.Tab to="/lists/read"  active={type === "read" ? 1 : 0}>
        최근 읽은 포스트
      </S.Tab>
    </S.TabsWrapper>
  );
};

export default ReadingListTabs;