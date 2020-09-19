import React from "react";

// component
import MarkDownRender from "./MarkDownRender";

// style
import * as S from "./style";

const MarkDownPreview = () => (
  <>
    <S.Layout>
      <MarkDownRender />
    </S.Layout>
  </>
);

export default MarkDownPreview;
