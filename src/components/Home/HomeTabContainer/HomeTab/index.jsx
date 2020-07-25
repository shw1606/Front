import React from "react";

// icons
import { BsGraphUp } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

// style
import {
  MainTabStyle,
  TabBottomLine,
} from "components/Home/HomeTabContainer/HomeTab/style";

const HomeMainTab = ({ title, href }) => {
  return (
    <>
      <MainTabStyle to={href}>
        {title === "트렌딩" ? <BsGraphUp /> : <BsClock />}
        {title}
        <TabBottomLine></TabBottomLine>
      </MainTabStyle>
    </>
  );
};

export default HomeMainTab;
