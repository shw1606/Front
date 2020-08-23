import React, {Fragment} from 'react';
import * as S from './style';
import dummy from 'saga/userPostListDummy.json';
import UserPostListItem from "./UserPostListItem";

function UserPostList() {
  const posts = dummy.data;

  return (
    <S.UserPostListWrapper>
      {posts
        ? <Fragment>
          {posts.map(post =>
            <UserPostListItem post={post}/>
          )}
          </Fragment>
        : <S.UserPostNotFound> 포스트가 없습니다. </S.UserPostNotFound>
      }
    </S.UserPostListWrapper>
  );
}

export default UserPostList;