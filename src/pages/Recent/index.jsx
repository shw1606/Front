import React from "react";

// components
import HomeAside from "components/Home/homeAside";
import HomePostLayout from "components/Home/HomePostLayout";
import HomeTabContainer from "components/Home/HomeTabContainer";

// home layout style
import HomeStyle from "./style";

const Recent = () => {
  return (
    <>
      <HomeTabContainer />
      <HomeStyle>
        <HomePostLayout />
        <HomeAside />
      </HomeStyle>
    </>
  );
};

export default Recent;
