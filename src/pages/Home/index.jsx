import React from "react";

// components
import HomeAside from "components/Home/HomeAside";
import HomeMain from "components/Home/HomeMain";

// home layout style
import HomeStyle from "pages/Home/style";

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
