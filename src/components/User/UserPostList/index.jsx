import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as S from './style';
import dummy from 'saga/userPostListDummy.json';
import UserPostListItem from "./UserPostListItem";

import {useInfiniteScroll} from "hooks";



function UserPostList({ username }) {
  const posts = dummy.data;

  return (
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
  );
}

export default UserPostList;