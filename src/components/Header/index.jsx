import React, { useMemo } from "react";
import * as S from "./style";
import LoginButton from "./LoginButton";
import UserButton from "./UserButton";
import SearchButton from "./SearchButton";
import { withRouter } from "react-router-dom";
const Header = ({ location }) => {
  const isLoggedIn = false;
  const url = useMemo(() => location.pathname.includes("register"), [
    location.pathname,
  ]);

  return (
    <>
      {url ? null : (
        <S.HeaderLayout>
          <S.HeaderLogo to="/"> clonelog </S.HeaderLogo>
          <S.Menu>
            <SearchButton />
            {isLoggedIn ? <UserButton /> : <LoginButton />}
          </S.Menu>
        </S.HeaderLayout>
      )}
    </>
  );
};
export default withRouter(Header);
