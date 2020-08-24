import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as S from './style';

// component
import UserPostListFallBack from "../UserPostListFallBack";
import UserTags from "../UserTags";

// action
import { LOAD_USER_POSTS_REQUEST } from "store/actions/userAction";

// custom hooks
import { useInfiniteScroll } from "hooks";

// lazy component
const UserPostListItem = lazy(() => import("./UserPostListItem"));

function UserPostList({ username }) {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.userReducer.posts);

  const showPostFallback = useSelector(state => state.userReducer.showPostFallback);
  const hasMorePosts = useSelector(state => state.userReducer.hasMorePosts);

  useEffect(() => {
    dispatch({ type: LOAD_USER_POSTS_REQUEST, user_id: 1234321, tag_id: 1 })
  }, []);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_USER_POSTS_REQUEST);

  return (
    <>
      <UserTags/>
      <Suspense fallback="">
        <S.UserPostListWrapper>
          {posts
            ? <Fragment>
              {posts.map(post =>
                <UserPostListItem post={post} username={username}/>
              )}
            </Fragment>
            : <S.UserPostNotFound> 포스트가 없습니다. </S.UserPostNotFound>
          }
        </S.UserPostListWrapper>
      </Suspense>
      {showPostFallback || <UserPostListFallBack/>}
    </>
  );
}

export default UserPostList;