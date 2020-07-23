import React from "react";
import {HeaderLayout, HeaderLogo} from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";

const Header = () => {
    const isLoggedIn = false;

    return (
        <HeaderLayout>
            <HeaderLogo to="/"> clonelog </HeaderLogo>
            {isLoggedIn
                ? <LoginButton/>
                : <UserButton/>
            }
        </HeaderLayout>
    );
};

export default Header;