import React from "react";

// components
import HomeAside from "components/Home/HomeAside";
import HomeTabContainer from "components/Home/HomeTabContainer";
import HomePostLayout from "components/Home/HomePostLayout";

// home layout style
import * as S from "./style";

const Home = () => {
  return (
    <>
      <S.HomeContainer>
        <HomeTabContainer />
        <S.MainContainer>
          <HomePostLayout />
          <HomeAside />
        </S.MainContainer>
      </S.HomeContainer>
    </>
  );
};

export default Home;
