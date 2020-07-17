import React from "react";

// components
import HomeAside from "components/home/homeAside";
import HomeMain from "components/home/homeMain";

// home layout style
import HomeLayoutStyle from "styles/layout/homeLayout";

const Home = () => {
  return (
    <>
      <HomeLayoutStyle>
        <HomeMain />
        <HomeAside />
      </HomeLayoutStyle>
    </>
  );
};

export default Home;
