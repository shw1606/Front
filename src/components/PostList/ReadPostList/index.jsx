import React, {Suspense, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as S from "../LikedPostList/style";
import PostListCard from "../PostListCard";
import PostListFallBack from "../PostListFallBack";
import {LOAD_READ_POSTS_REQUEST} from "store/actions/postListAction";
import {useInfiniteScroll} from "hooks";

const ReadPostList = ({ username }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.readPosts);

  const showPostFallback = useSelector(state => state.postList.showReadPostsFallback);
  const hasMorePosts = useSelector(state => state.postList.hasMoreReadPosts);

  useEffect(() => {
    dispatch({ type: LOAD_READ_POSTS_REQUEST, username });
  }, []);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_READ_POSTS_REQUEST);

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

export default ReadPostList;