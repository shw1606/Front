import React, { memo } from "react";

// component
import ReComment from "./ReComment";

// style
import * as S from "./style";

const CommentCard = ({ data }) => {
  return (
    <>
      <S.Layout>
        <S.UserInfoConainer>
          <div className="profile">
            <S.LinkWrapper to="/">
              <img />
            </S.LinkWrapper>
            <S.NameWrapper>
              <div className="user-name">
                <S.LinkWrapper to="/">{data.author}</S.LinkWrapper>
              </div>
              <div className="date">{data.updated_at}</div>
            </S.NameWrapper>
          </div>
        </S.UserInfoConainer>
        <S.CommentText>
          <p>{data.comment_context}</p>
        </S.CommentText>
        <ReComment data={data} />
      </S.Layout>
    </>
  );
};

export default memo(CommentCard);
