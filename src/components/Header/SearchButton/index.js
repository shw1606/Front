import React from "react";
import {SearchButtonWrapper, SearchIcon} from "./style";
import {NavLink} from "react-router-dom";

const SearchButton = () => {
    return (
      <SearchButtonWrapper>
          <NavLink to="/search">
              <SearchIcon/>
          </NavLink>
      </SearchButtonWrapper>
    );
};

export default SearchButton;