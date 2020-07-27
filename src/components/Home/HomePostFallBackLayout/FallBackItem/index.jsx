import React, { memo } from "react";

import { Container, Image, Description, Author } from "./style";

const FallBackItem = () => {
  return (
    <Container>
      <Image></Image>
      <Description>
        <div className="title"></div>
        <div className="payload"></div>
        <div className="date"></div>
      </Description>
      <Author>
        <div className="profile"></div>
        <div className="name"></div>
      </Author>
    </Container>
  );
};

export default memo(FallBackItem);
