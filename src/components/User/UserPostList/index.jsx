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
        : <div> 포스트가 없습니다. </div>
      }
    </S.UserPostListWrapper>
  );
}

export default UserPostList;