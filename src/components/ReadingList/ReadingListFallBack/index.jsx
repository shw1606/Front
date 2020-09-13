import React from "react";

// component
import FallBackItem from "./FallBackItem";

// style
import * as S from "./style";

const ReadingListFallBack = () => {
  return (
    <>
      <S.ReadingListLayout>
          {Array(8)
            .fill()
            .map(() => (
              <FallBackItem
                key={Math.floor(Math.random() * 1000) + "Fallback"}
              />
            ))}
      </S.ReadingListLayout>
    </>
  );
};

export default ReadingListFallBack;
