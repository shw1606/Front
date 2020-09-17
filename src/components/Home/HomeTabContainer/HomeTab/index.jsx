import React from "react";

// icons
import { BsGraphUp } from "react-icons/bs";
import { BsClock } from "react-icons/bs";

// style
import * as S from "./style";

const HomeMainTab = ({ title, href }) => (
  <>
    <S.MainTabStyle to={href}>
      {title === "트렌딩" ? <BsGraphUp /> : <BsClock />}
      {title}
      <S.TabBottomLine />
    </S.MainTabStyle>
  </>
);

export default HomeMainTab;
