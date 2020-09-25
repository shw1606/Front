import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const UserTabs = ({ type, username }) => (
  <S.TabsWrapper>
    <S.UserTab to={`/profile/@${username}`} active={type === '' ? 1 : 0}>
      글
    </S.UserTab>
    <S.UserTab to={`/profile/@${username}/series`} active={type === 'series' ? 1 : 0}>
      시리즈
    </S.UserTab>
    <S.UserTab to={`/profile/@${username}/about`} active={type === 'about' ? 1 : 0}>
      소개
    </S.UserTab>
  </S.TabsWrapper>
);

UserTabs.propTypes = {
  type: PropTypes.string,
  username: PropTypes.string.isRequired
};

UserTabs.defaultProps = {
  type: ''
};

export default UserTabs;
