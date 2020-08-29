import React, { memo } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const TagItem = ({ Tag }) => {
  const { name } = Tag;
  return (
    <S.StyledTagItem>
      <Link to={`/tags/${name}`}># {name}</Link>
    </S.StyledTagItem>
  );
};
export default memo(TagItem);
