import React from 'react';
import {SearchBarWrapper, SearchInput, SearchIcon} from "./style";

const SearchBar = () => {
    return (
        <SearchBarWrapper>
            <SearchIcon/>
            <SearchInput placeholder="검색어를 입력하세요."/>
        </SearchBarWrapper>
    );
};

export default SearchBar;