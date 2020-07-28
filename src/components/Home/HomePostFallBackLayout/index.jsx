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
              <FallBackItem />
            ))}
        </S.Container>
      </S.ContainerWrapper>
    </>
  );
};

export default HomePostFallBackLayout;
