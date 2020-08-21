import React from 'react';
import * as S from './style';
import UserHeader from "components/User/UserHeader";

const User = ({ match }) => {
  return (
    <S.UserContainer>
      <UserHeader id="123"/>
    </S.UserContainer>
  );
};

export default User;