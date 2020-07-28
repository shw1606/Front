import React, { useState } from "react";
import TagItem from "./TagItem";
import * as S from "./style";
import { Link } from "react-router-dom";

const HomeAsideTags = () => {
  const [Tags, setTags] = useState([
    {
      id: 1,
      text: "TIL",
    },
    {
      id: 2,
      text: "JavaScript",
    },
    {
      id: 3,
      text: "알고리즘",
    },
    {
      id: 4,
      text: "React",
    },
    {
      id: 5,
      text: "python",
    },
    {
      id: 6,
      text: "WeCode",
    },
    {
      id: 7,
      text: "CSS",
    },
    {
      id: 8,
      text: "html",
    },
    {
      id: 9,
      text: "django",
    },
    {
      id: 10,
      text: "위코드",
    },
  ]);
  return (
    <S.StyledTagsWrapper>
      <S.StyledTagsTitle>인기 태그</S.StyledTagsTitle>
      <S.StyledTagLIst>
        {Tags.map((Tag) => (
          <TagItem Tag={Tag} key={Tag.id} />
        ))}
        <S.StyledMore>
          <Link to="/tags">더보기</Link>
        </S.StyledMore>
      </S.StyledTagLIst>
    </S.StyledTagsWrapper>
  );
};
export default HomeAsideTags;
