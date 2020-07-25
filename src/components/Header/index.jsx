import React from "react";
import {HeaderLayout, HeaderLogo, Menu} from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchButton from "./SearchButton";

const Header = () => {
  const isLoggedIn = true;

    return (
        <HeaderLayout>
            <HeaderLogo to="/"> clonelog </HeaderLogo>
            <Menu>
                <SearchButton/>
                {isLoggedIn
                    ? <LoginButton/>
                    : <UserButton/>
                }
            </Menu>
        </HeaderLayout>

    );
};
export default Header;
