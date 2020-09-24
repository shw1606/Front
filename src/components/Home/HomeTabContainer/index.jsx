import React from "react";

// components
import HomeTab from "components/Home/HomeTabContainer/HomeTab";

// style
import TabContainerStyle from "components/Home/HomeTabContainer/style";

const HomeTabContainer = () => (
  <>
    <TabContainerStyle>
      <HomeTab key="트렌딩" title="트렌딩" href="/" />
      <HomeTab key="최신" title="최신" href="recent" />
    </TabContainerStyle>
  </>
);

export default HomeTabContainer;
