import React, {useEffect, useRef, useState} from 'react';
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
                <DropdownItem> 메뉴1 </DropdownItem>
                <StyledLink to="/login"> 로그아웃 </StyledLink>
            </DropdownContent>
            }
        </DropdownMenuWrapper>
    )
}

export default DropdownMenu