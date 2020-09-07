import React from 'react';
import * as S from "./style";

const PostListTabs = ({ type }) => {
  return (
    <S.TabsWrapper>
      <S.PostTab to="/lists/liked" active={type === "liked" ? 1 : 0}>
        좋아한 포스트
      </S.PostTab>
      <S.PostTab to="/lists/read"  active={type === "read" ? 1 : 0}>
        최근 읽은 포스트
      </S.PostTab>
    </S.TabsWrapper>
  );
};

export default PostListTabs;