import React, { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { useOutsideClick } from "hooks";
import {
  DropdownContent,
  DropdownBtn,
  DropdownMenuWrapper,
  UserProfile,
  ArrowDown,
  StyledLink,
} from "./style";

function DropdownMenu({ username }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const contentRef = useRef(null);
  useOutsideClick(contentRef, setDropdownVisible);

  return (
    <DropdownMenuWrapper>
      <DropdownBtn onClick={toggleDropdown}>
        <UserProfile />
        {' '}
        <ArrowDown />
      </DropdownBtn>
      {dropdownVisible && (
        <DropdownContent ref={contentRef}>
          <StyledLink to={`/profile/@${username}`}> 내 벨로그 </StyledLink>
          <StyledLink to="/saves"> 임시 글 </StyledLink>
          <StyledLink to="/lists/liked"> 읽기 목록 </StyledLink>
          <StyledLink to="/setting"> 설정 </StyledLink>
          <StyledLink to="/"> 로그아웃 </StyledLink>
        </DropdownContent>
      )}
    </DropdownMenuWrapper>
  );
}

DropdownMenu.propTypes = {
  username: PropTypes.string.isRequired
};

export default DropdownMenu;
