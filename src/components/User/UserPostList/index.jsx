import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { LOAD_USER_POSTS_REQUEST } from "store/actions/userAction";
import { useInfiniteScroll } from "hooks";
import * as S from './style';

// component
import UserPostListFallBack from "../UserPostListFallBack";
import UserTags from "../UserTags";

// action

// custom hooks

// lazy component
const UserPostListItem = lazy(() => import("./UserPostListItem"));

function UserPostList({ username }) {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.userReducer.posts);

  const showPostFallback = useSelector((state) => state.userReducer.showPostFallback);
  const hasMorePosts = useSelector((state) => state.userReducer.hasMorePosts);

  const query = new URLSearchParams(useLocation().search);
  const currentTag = query.get("tag");

  // 사용자가 선택한 태그에 따라 글 목록을 가져옴
  useEffect(() => {
    dispatch({ type: LOAD_USER_POSTS_REQUEST, user_id: 1234321, tag: currentTag });
  }, [currentTag]);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_USER_POSTS_REQUEST);

  return (
    <>
      <UserTags username={username} />
      <Suspense fallback="">
        <S.UserPostListWrapper>
          {posts
            ? (
              <>
                {posts.map((post) =>
                  <UserPostListItem post={post} username={username} />)}
              </>
            )
            : <S.UserPostNotFound> 포스트가 없습니다. </S.UserPostNotFound>}
        </S.UserPostListWrapper>
      </Suspense>
      {showPostFallback || <UserPostListFallBack />}
    </>
  );
}

export default UserPostList;
