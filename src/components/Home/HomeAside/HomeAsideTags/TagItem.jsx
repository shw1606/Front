import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const TagItem = ({ Tag }) => {
  const { text } = Tag;
  return (
    <S.StyledTagItem>
      <Link to={`/tags/${text}`}># {text}</Link>
    </S.StyledTagItem>
  );
};
export default TagItem;
