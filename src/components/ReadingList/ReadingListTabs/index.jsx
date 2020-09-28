import React from 'react';
import PropTypes from 'prop-types';
import * as S from "./style";

const ReadingListTabs = ({ type }) => (
  <S.TabsWrapper>
    <S.Tab to="/lists/liked" active={type === "liked" ? 1 : 0}>
      좋아한 포스트
    </S.Tab>
    <S.Tab to="/lists/read" active={type === "read" ? 1 : 0}>
      최근 읽은 포스트
    </S.Tab>
  </S.TabsWrapper>
);

ReadingListTabs.propTypes = {
  type: PropTypes.string.isRequired
};

export default ReadingListTabs;
