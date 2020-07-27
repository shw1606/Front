import React from "react";

// component
import FallBackItem from "./FallBackItem";

// style
import { Container, ContainerWrapper } from "./style";

const HomePostFallBackLayout = () => {
  return (
    <>
      <ContainerWrapper>
        <Container>
          {Array(8)
            .fill()
            .map(() => (
              <FallBackItem />
            ))}
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default HomePostFallBackLayout;
