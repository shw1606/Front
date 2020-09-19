import React, { memo } from "react";

import * as S from "./style";

const FallBackItem = () => (
  <S.Container>
    <S.Image />
    <S.Description>
      <div className="title" />
      <div className="payload" />
      <div className="date" />
    </S.Description>
    <S.Author>
      <div className="profile" />
      <div className="name" />
    </S.Author>
  </S.Container>
);

export default memo(FallBackItem);
