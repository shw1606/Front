import React, {useRef, useState} from 'react';
import {DropdownContent, DropdownBtn, DropdownMenuWrapper, UserProfile, ArrowDown, StyledLink} from './style';
import useDropdownOutsideClick from "hooks/useOutsideClick";

function DropdownMenu({username}) {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setDropdownVisible);

    return (
        <DropdownMenuWrapper>
            <DropdownBtn onClick={toggleDropdown}>
                <UserProfile/> <ArrowDown/>
            </DropdownBtn>
            {dropdownVisible &&
            <DropdownContent ref={contentRef}>
                <StyledLink to="/"> 내 벨로그 </StyledLink>
                <StyledLink to="/"> 임시 글 </StyledLink>
                <StyledLink to="/"> 읽기 목록 </StyledLink>
                <StyledLink to="/"> 설정 </StyledLink>
                <StyledLink to="/"> 로그아웃 </StyledLink>
            </DropdownContent>
            }
        </DropdownMenuWrapper>
    )
}

export default DropdownMenu