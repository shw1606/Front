import React, { memo } from "react";

import * as S from "./style";

const FallBackItem = () => {
  return (
    <S.FallBackItemWrapper>
      <S.ImageWrapper>
        <S.Image/>
      </S.ImageWrapper>
      <S.Title/>
      <S.Content/>
      <S.SubInfo>
        <S.Date/>
        <S.Like/>
      </S.SubInfo>
    </S.FallBackItemWrapper>
  );
};

export default memo(FallBackItem);
