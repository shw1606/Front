import React from "react";

// components
import HomeAside from "components/home/homeAside";
import HomeMain from "components/home/homeMain";

// home layout style
import HomeStyle from "pages/home/style";

const Home = () => {
  return (
    <>
      <HomeStyle>
        <HomeMain />
        <HomeAside />
      </HomeStyle>
    </>
  );
};

export default Home;
