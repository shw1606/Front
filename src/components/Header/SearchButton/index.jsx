import React from "react";
import { NavLink } from "react-router-dom";
import * as S from './style';

const SearchButton = () => (
  <S.SearchButtonWrapper>
    <NavLink to="/search">
      <S.SearchIcon />
    </NavLink>
  </S.SearchButtonWrapper>
);

export default SearchButton;
