import React from "react";
import {HeaderLayout, HeaderLogo, SearchBtn, HeaderWrapper} from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";

const Header = () => {
    const isLoggedIn = false;

    return (
        <HeaderWrapper>
            <HeaderLayout>
                <HeaderLogo to="/"> clonelog </HeaderLogo>
                <SearchBtn/>
                {isLoggedIn
                    ? <LoginButton/>
                    : <UserButton/>
                }
            </HeaderLayout>
        </HeaderWrapper>
    );
};

export default Header;