import React from 'react';
import PropTypes from 'prop-types';
import * as S from "./style";

const SearchBar = ({ username, onChange, searchInputRef }) => (
  <>
    {username && (
    <S.UsernameWrapper>
      {username}
      님이 작성한 포스트 검색
    </S.UsernameWrapper>
    )}
    <S.SearchBarWrapper>
      <S.SearchIcon />
      <S.SearchInput ref={searchInputRef} onChange={onChange} placeholder="검색어를 입력하세요." />
    </S.SearchBarWrapper>
  </>
);

SearchBar.propTypes = {
  username: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  searchInputRef: PropTypes.shape({
    current: PropTypes.element,
  }).isRequired,
};
SearchBar.defaultProps = {
  username: null,
};

export default SearchBar;
