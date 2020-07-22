import React from 'react';
import {SearchBtn, UserButtonWrapper, WriteBtn} from "./style";
import DropdownMenu from "./DropdownMenu";

const UserButton = () => {
    return (
        <UserButtonWrapper>
            <SearchBtn/>
            <WriteBtn> 새 글 작성 </WriteBtn>
            <DropdownMenu/>
        </UserButtonWrapper>
    );
};

export default UserButton;