import React from "react";
import {HeaderLayout, HeaderLogo, Menu} from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchButton from "./SearchButton";

const Header = () => {
  const isLoggedIn = false;

    return (
        <HeaderLayout>
            <HeaderLogo to="/"> clonelog </HeaderLogo>
            <Menu>
                <SearchButton/>
                {isLoggedIn
                    ? <UserButton/>
                    : <LoginButton/>
                }
            </Menu>
        </HeaderLayout>

    );
};
export default Header;
