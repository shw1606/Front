import React, { memo } from "react";

import * as S from "./style";

const FallBackItem = () => (
  <S.FallbackItemWrapper>
    <div>
      <div className="tag-skeleton">
        <S.SpanAnimation
          style={{ width: "6rem", height: "2rem", borderRadius: "1rem" }}
        />
      </div>
      <div>
        <div className="lines">
          <div className="line">
            <S.SpanAnimation style={{ flex: "3 1 0%" }} />
            <S.SpanAnimation style={{ flex: "5 1 0%" }} />
            <S.SpanAnimation style={{ flex: "2 1 0%" }} />
            <S.SpanAnimation style={{ flex: "4 1 0%" }} />
            <S.SpanAnimation style={{ flex: "3 1 0%" }} />
          </div>
          <div className="line">
            <S.SpanAnimation style={{ flex: "2 1 0%" }} />
            <S.SpanAnimation style={{ flex: "4 1 0%" }} />
            <S.SpanAnimation style={{ flex: "3 1 0%" }} />
            <S.SpanAnimation style={{ flex: "5 1 0%" }} />
            <S.SpanAnimation style={{ flex: "4 1 0%" }} />
          </div>
        </div>
      </div>
    </div>
    <div className="count">
      <S.SpanAnimation style={{ width: "8rem" }} />
    </div>
  </S.FallbackItemWrapper>
);

export default memo(FallBackItem);
