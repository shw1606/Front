import React from "react";

// style
import * as S from "./style";

const UrlSetting = () => (
  <>
    <S.Layout>
      <S.Title>URL 설정</S.Title>
      <S.InputWrapper>
        <div className="user-name">/@charmingcheol/</div>
        <S.Input />
      </S.InputWrapper>
    </S.Layout>
  </>
);

export default UrlSetting;
