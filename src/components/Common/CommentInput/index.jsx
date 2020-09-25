import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

// action
import { SUBMIT_COMMENT_REQUEST } from "store/actions/postDetailAction";

// components
import Modal from "components/Common/Modal";
import Login from "components/Login";

// style
import * as S from "./style";

const CommentInput = ({
  cancelBtn,
  propsCancelBtn,
  userId = 0,
  postId = 0,
  parentId = 0,
  grandParentId = 0,
  commentId = 0,
}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState(""); // textarea에서 입력한 글자
  const [modalVisible, setModalVisible] = useState(false); // 회원가입 modal창 출력여부
  const textareaRef = useRef(); // textarea ref값

  // 글자수에 따라 코멘트 입력창 높이 변경
  const resizeTextarea = useCallback((event) => {
    textareaRef.current.style.height = "1px";
    textareaRef.current.style.height =
      `${12 + textareaRef.current.scrollHeight}px`;
    setText(event.target.value);
  }, []);

  // modal이 닫혔을 때
  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  // 취소 버튼 클릭
  const clickCancelBtn = useCallback(() => {
    propsCancelBtn(true);
  }, [propsCancelBtn]);

  // 댓글 입력창 전송
  const submitComment = useCallback(
    (event) => {
      event.preventDefault();
      if (userId) {
        dispatch({
          type: SUBMIT_COMMENT_REQUEST,
          data: { userId, postId, commentId, parentId, grandParentId, text },
        });
        textareaRef.current.value = "";
      } else {
        setModalVisible(true);
      }
    },
    [userId, dispatch, postId, commentId, parentId, grandParentId, text]
  );

  // 브라우저 크기가 변경될 때 인풋창 크기 맞춤
  useEffect(() => {
    window.addEventListener("resize", resizeTextarea);
    return () => {
      window.removeEventListener("resize", resizeTextarea);
    };
  }, [resizeTextarea]);

  return (
    <>
      <form onSubmit={submitComment}>
        <S.Textarea
          ref={textareaRef}
          onKeyDown={resizeTextarea}
          onKeyUp={resizeTextarea}
        />
        <S.ButtonWrapper>
          {cancelBtn ? (
            <button className="cancel" onClick={clickCancelBtn}>
              취소
            </button>
          ) : null}
          <button type="submit">댓글 작성</button>
        </S.ButtonWrapper>
      </form>
      {modalVisible && (
        <Modal visible={modalVisible} onClose={closeModal}>
          <Login />
        </Modal>
      )}
    </>
  );
};

export default memo(CommentInput);
