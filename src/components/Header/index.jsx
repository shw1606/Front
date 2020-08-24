import React from "react";
import * as S from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchButton from "./SearchButton";

const Header = () => {
  const isLoggedIn = true;

    return (
        <S.HeaderLayout>
            <S.HeaderLogo to="/"> clonelog </S.HeaderLogo>
            <S.Menu>
                <SearchButton/>
                {isLoggedIn
                    ? <UserButton/>
                    : <LoginButton/>
                }
            </S.Menu>
        </S.HeaderLayout>
    );
};
export default Header;
