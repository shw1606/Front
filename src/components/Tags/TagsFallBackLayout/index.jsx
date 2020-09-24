import React from "react";

// component
import FallBackItem from "./FallBackItem";

// style
import * as S from "./style";

const TagsFallBackLayout = () => (
  <>
    <S.FallbackSection>
      {Array(20)
        .fill()
        .map(() => (
          <FallBackItem key={`${Math.floor(Math.random() * 1000)}Fallback`} />
        ))}
    </S.FallbackSection>
  </>
);

export default TagsFallBackLayout;
