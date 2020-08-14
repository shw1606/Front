import React from "react";
import { useSelector } from "react-redux";

// components
import CommentInput from "components/Common/CommentInput";
import CommentCard from "components/Common/CommentCard";

// style
import * as S from "./style";

const CommentContainer = () => {
  const postInfo = useSelector((state) => state.postDetailReducer.postInfo);
  return (
    <>
      {postInfo && (
        <S.Layout>
          <h4>{postInfo.comments.length}개의 댓글</h4>
          <CommentInput cancelBtn={false} />
          <S.CommentList>
            {postInfo.comments.map((value) => {
              return (
                <CommentCard
                  key={value.comment_context + value._id}
                  data={value}
                />
              );
            })}
          </S.CommentList>
        </S.Layout>
      )}
    </>
  );
};

export default CommentContainer;
