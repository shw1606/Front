import React from "react";
import DropdownMenu from "./DropdownMenu";
import * as S from "./style";

const UserButton = () => (
  <S.UserButtonWrapper>
    <S.WriteBtn to="/write">새 글 작성</S.WriteBtn>
    <DropdownMenu username="test123" />
  </S.UserButtonWrapper>
);

export default UserButton;
