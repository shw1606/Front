import React from 'react';
import * as S from './style';

const FallBackItem = () => (
  <S.SeriesCardWrapper>
    <S.ImageWrapper>
      <S.Image />
    </S.ImageWrapper>
    <S.Title />
    <S.SeriesSubInfo>
      <S.Posts />
      <S.UpdatedAt />
    </S.SeriesSubInfo>
  </S.SeriesCardWrapper>
);

export default FallBackItem;
