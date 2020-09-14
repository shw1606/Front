import React, { memo } from "react";
import * as S from "./style";

const FallBackItem = () => {
  return (
    <S.Container>
      <S.Image />
      <S.Description>
        <div className="title"></div>
        <div className="payload"></div>
        <div className="date"></div>
      </S.Description>
      <S.Author>
        <div className="profile"></div>
        <div className="name"></div>
      </S.Author>
    </S.Container>
  );
};

export default memo(FallBackItem);
