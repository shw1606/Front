import React from "react";

// style
import * as S from "./style";

const SeriesUrlSlug = ({ text, hide }) => (
  <>
    <S.Layout>
      <S.UrlSlugInputWrapper>
        <span>/@charmingcheol/series/</span>
        <S.UrlSlugInput>{text}</S.UrlSlugInput>
      </S.UrlSlugInputWrapper>
      <S.UrlSlugButtonWrapper>
        <S.UrlSlugButton
          onClick={hide}
          type="button"
          background="rgb(52, 58, 64)"
        >
          취소
        </S.UrlSlugButton>
        <S.UrlSlugButton tyoe="submit" background="rgb(18, 184, 134)">
          시리즈 추가
        </S.UrlSlugButton>
      </S.UrlSlugButtonWrapper>
    </S.Layout>
  </>
);

export default SeriesUrlSlug;
