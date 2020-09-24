import React from "react";
import PostUserProfile from "./PostUserProfile";
import PostUserReferences from "./PostUserReferences";
import * as S from "./style";

const PostUserInfo = () => (
  <S.PostUserFence>
    <div>
      <PostUserProfile />
      <S.MiddleLinediv />
      {' '}
      {/* 중간 선 */}
      <PostUserReferences />
    </div>
  </S.PostUserFence>
);

export default PostUserInfo;
