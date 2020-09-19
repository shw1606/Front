import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const PostUserProfile = () => (
  <S.ProfileContainer>
    <Link to="/@exampleuser">
      <img src="" alt="profile" />
    </Link>
    <S.ProfileTextContainer>
      <div className="name">
        <Link to="/@exampleuser">
          exampleuser
          {/* 사용자 이름 props */}
        </Link>
      </div>
      <div className="description">
        exampleuser description
        {/* 사용자 메시지 props */}
      </div>
    </S.ProfileTextContainer>
  </S.ProfileContainer>
);
export default PostUserProfile;
