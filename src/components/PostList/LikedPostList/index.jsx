import React, {useEffect} from "react";
import * as S from './style'
import { LOAD_LIKED_POSTS_REQUEST } from "store/actions/postListAction";
import PostListCard from "../PostListCard";
import {useDispatch, useSelector} from "react-redux";

const LikedPostList = ({ username }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.likedPosts);

  const showPostFallback = useSelector(state => state.userReducer.showLikedPostsFallback);
  const hasMorePosts = useSelector(state => state.userReducer.hasMoreLikedPosts);

  useEffect(() => {
    dispatch({ type: LOAD_LIKED_POSTS_REQUEST, username });
  }, []);

  return (
    <S.PostListLayout>
      {posts && posts.map(post =>
        <PostListCard data={post} key={post.id} />
      )}
    </S.PostListLayout>
  );
};

export default LikedPostList;