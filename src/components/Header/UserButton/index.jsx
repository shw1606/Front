import React from 'react';
import {UserButtonWrapper, WriteBtn} from "./style";
import DropdownMenu from "./DropdownMenu";

const UserButton = () => {
    return (
        <UserButtonWrapper>
            <WriteBtn> 새 글 작성 </WriteBtn>
            <DropdownMenu/>
        </UserButtonWrapper>
    );
};

export default UserButton;