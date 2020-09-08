import React from "react";
import * as S from './style'
import postList from "saga/aditional1.json"
import PostListCard from "../PostListCard";

const LikedPostList = ({ username }) => {
  const posts = postList.data;

  return (
    <S.PostListLayout>
      {posts && posts.map(post =>
        <PostListCard data={post} key={post.id} />
      )}
    </S.PostListLayout>
  );
};

export default LikedPostList;