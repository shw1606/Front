import React, {useRef, useState} from 'react';
import {DropdownItem, DropdownContent, DropdownBtn, DropdownMenuWrapper, UserProfile, ArrowDown, StyledLink} from './style';
import useDropdownOutsideClick from "hooks/useOutsideClick";

function DropdownMenu({username}) {
    const [userDropdownVisible, setUserDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setUserDropdownVisible(!userDropdownVisible);
    };

    const contentRef = useRef(null);
    useDropdownOutsideClick(contentRef, setUserDropdownVisible);

    return (
        <DropdownMenuWrapper>
            <DropdownBtn onClick={toggleDropdown}>
                <UserProfile/> <ArrowDown/>
            </DropdownBtn>
            {userDropdownVisible &&
            <DropdownContent ref={contentRef}>
                <StyledLink to="/login"> 내 벨로그 </StyledLink>
                <StyledLink to="/login"> 임시 글 </StyledLink>
                <StyledLink to="/login"> 읽기 목록 </StyledLink>
                <StyledLink to="/login"> 설정 </StyledLink>
                <StyledLink to="/login"> 로그아웃 </StyledLink>
            </DropdownContent>
            }
        </DropdownMenuWrapper>
    )
}

export default DropdownMenu