import React from "react";

// components
import HomeAside from "components/Home/HomeAside";
import HomeTabContainer from "components/Home/HomeTabContainer";
import HomePostLayout from "components/Home/HomePostLayout";

// home layout style
import { HomeContainer, MainContainer } from "./style";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTabContainer />
        <MainContainer>
          <HomePostLayout />
          <HomeAside />
        </MainContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
