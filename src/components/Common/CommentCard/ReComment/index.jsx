import React, { useCallback, useRef, useState } from "react";
import { BsPlusSquareFill } from "react-icons/bs";

// components
import CommentCard from "../index";
import CommentInput from "components/Common/CommentInput";

// style
import * as S from "./style";

const ReComment = ({ data }) => {
  const [openComment, setopenComment] = useState(true);
  const [openRecomment, setOpenRecomment] = useState(true);
  const recommentRef = useRef();

  // [답글 달기], [n개의 답글] 버튼 클릭
  const clickOpenButton = useCallback(() => {
    recommentRef.current.classList.toggle("opened");
    setopenComment((prev) => !prev);
  }, []);

  // 자식 컴포넌트에서 [답글 달기], [n개의 답글] 버튼 클릭 접근
  const propsClickOpenButton = useCallback(() => {
    recommentRef.current.classList.toggle("opened");
  }, []);

  // [답글 작성하기] 버튼 클릭
  const clickRecommentBtn = useCallback(() => {
    setOpenRecomment((prev) => !prev);
  }, []);

  // 자식 컴포넌트에서 [답글 작성하기] 버튼 클릭
  const propsClickRecommentBtn = useCallback(() => {
    setOpenRecomment((prev) => !prev);
  }, []);

  return (
    <>
      <S.OpenButtonContainer>
        {data.endPoint ? null : (
          <div className="button" onClick={clickOpenButton}>
            <BsPlusSquareFill />
            <span>
              {openComment
                ? data.re_comments.length
                  ? `${data.re_comments.length}개의 답글`
                  : "답글 달기"
                : "숨기기"}
            </span>
          </div>
        )}
        <S.ReCommentWrapper ref={recommentRef}>
          {data.re_comments.length ? (
            data.re_comments.map((value) => {
              return (
                <CommentCard
                  key={value.comment_context + value._id}
                  data={value}
                />
              );
            })
          ) : (
            <CommentInput
              cancelBtn={true}
              propsCancelBtn={propsClickOpenButton}
              // userId={1}
              postId={data.post_id}
              commentId={data._id}
              parentId={data.parentId}
              grandParentId={data.grandParentId}
            />
          )}
          {data.re_comments.length ? (
            openRecomment ? (
              <S.ReplyButton onClick={clickRecommentBtn}>
                답글 작성하기
              </S.ReplyButton>
            ) : (
              <CommentInput
                cancelBtn={true}
                propsCancelBtn={propsClickRecommentBtn}
                // userId={1}
                postId={data.post_id}
                commentId={data._id}
                parentId={data.parentId}
                grandParentId={data.grandParentId}
              />
            )
          ) : null}
        </S.ReCommentWrapper>
      </S.OpenButtonContainer>
    </>
  );
};

export default ReComment;
