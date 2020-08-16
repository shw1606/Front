import React from "react";
import * as S from "./style";

const SeriesItem = ({ url, title, active }) => {
  return (
    <S.SeriesItemli>
      <S.SeriesItemLink to={url} active={active}>
        {title}
      </S.SeriesItemLink>
    </S.SeriesItemli>
  );
};
export default SeriesItem;
