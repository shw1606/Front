import React, { useEffect, Suspense } from "react";
import * as S from './style'
import { LOAD_LIKED_POSTS_REQUEST } from "store/actions/postListAction";
import PostListCard from "../PostListCard";
import {useDispatch, useSelector} from "react-redux";
import {useInfiniteScroll} from "hooks";
import PostListFallBack from "../PostListFallBack";

const LikedPostList = ({ username }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.likedPosts);

  const showPostFallback = useSelector(state => state.postList.showLikedPostsFallback);
  const hasMorePosts = useSelector(state => state.postList.hasMoreLikedPosts);

  useEffect(() => {
    dispatch({ type: LOAD_LIKED_POSTS_REQUEST, username });
  }, []);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_LIKED_POSTS_REQUEST);

  return (
    <>
      <Suspense fallback="">
        <S.PostListLayout>
          {posts && posts.map(post =>
            <PostListCard data={post} key={post.id} />
          )}
        </S.PostListLayout>
      </Suspense>
      {showPostFallback || <PostListFallBack/>}
    </>
  );
};

export default LikedPostList;