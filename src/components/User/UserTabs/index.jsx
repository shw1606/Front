import React from 'react';
import * as S from './style';

const UserTabs = ({ type, username }) => {
  return (
    <S.TabsWrapper>
      <S.UserTab to={`/profile/@${username}`} active={type === undefined ? 1 : 0}>
        글
      </S.UserTab>
      <S.UserTab to={`/profile/@${username}/series`}  active={type === 'series' ? 1 : 0}>
        시리즈
      </S.UserTab>
      <S.UserTab to={`/profile/@${username}/about`}  active={type === 'about' ? 1 : 0}>
        소개
      </S.UserTab>
    </S.TabsWrapper>
  );
};

export default UserTabs;