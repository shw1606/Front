import React from "react";
import FallBackItem from "./FallBackItem";
import * as S from './style';

const UserSeriesFallBack = () => (
  <S.UserSeriesFallBackLayout>
    {Array(8)
      .fill()
      .map(() => (
        <FallBackItem
          key={`${Math.floor(Math.random() * 1000)}Fallback`}
        />
      ))}
  </S.UserSeriesFallBackLayout>
);

export default UserSeriesFallBack;
