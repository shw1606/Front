import React from "react";
import {useSelector} from "react-redux";
import Tags from "./Tags";
import * as S from './style';

const PostHeader = () => {
  const post = useSelector((state) => state.postDetailReducer.postInfo);

  return (
    <>
      <S.PostTitle>
        <h1> {post.title} </h1>
      </S.PostTitle>
      <S.PostInfo>
        <S.StyledLink> {post.author} </S.StyledLink>
        ·
        <span> {post.updated_at} </span>
      </S.PostInfo>
      <Tags/>
    </>
  );
};

export default PostHeader;
