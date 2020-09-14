import React, { useEffect } from "react";
import * as S from "./style";

const TagItem = ({ Tag }) => {
  const { name, description, count } = Tag;
  return (
    <S.TagItemWrapper description={description}>
      <div>
        <S.TagItemLink to={`/tags/${name}`}>{name}</S.TagItemLink>
        <p>{description}</p>
      </div>
      <div className="count">총 {count}개의 포스트</div>
    </S.TagItemWrapper>
  );
};

export default TagItem;
