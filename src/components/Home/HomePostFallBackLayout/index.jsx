import React from "react";

// component
import FallBackItem from "./FallBackItem";

// style
import * as S from "./style";

const HomePostFallBackLayout = () => {
  return (
    <>
      <S.ContainerWrapper>
        <S.Container>
          {Array(8)
            .fill()
            .map(() => (
              <FallBackItem
                key={Math.floor(Math.random() * 1000) + "Fallback"}
              />
            ))}
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
};

export default HomePostFallBackLayout;
