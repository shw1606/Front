import React from "react";

// components
import HomeAside from "components/Home/HomeAside";
import HomeMain from "components/Home/HomeMain";

// Home Layout style
import HomeLayoutStyle from "styles/Layout/HomeLayout";

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
