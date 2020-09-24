import React from "react";

// component
import SavePostLayout from "components/Saves/SavePostLayout";

// style
import * as S from "./style";

const Saves = () => (
  <>
    <S.Layout>
      <S.Title>임시 글 목록</S.Title>
      <SavePostLayout />
    </S.Layout>
  </>
);

export default Saves;
