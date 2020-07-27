import React from 'react';
import {UserButtonWrapper, WriteBtn} from "./style";
import DropdownMenu from "./DropdownMenu";

import * as S from './style';

const UserButton = () => {
    return (
        <S.UserButtonWrapper>
            <WriteBtn> 새 글 작성 </WriteBtn>
            <DropdownMenu/>
        </S.UserButtonWrapper>
    );
};

export default UserButton;