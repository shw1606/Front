import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// action
import { deleteSaveItemRequest } from "store/actions/savesAction";

// style
import * as S from "./style";

const DeleteOkModal = ({ visible, onCancel, id }) => {
  const dispatch = useDispatch();
  const [closed, setClosed] = useState(true);

  // 확인 버튼 클릭
  const clickConfirmBtn = useCallback(() => {
    dispatch(deleteSaveItemRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    let timeoutId = null;
    if (visible) {
      setClosed(false);
    } else {
      timeoutId = setTimeout(() => {
        setClosed(true);
      }, 200);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [visible]);

  if (!visible && closed) return null;

  return (
    <>
      <S.Layout>
        <S.ModalContainer visible={visible}>
          <S.Title>임시 글 삭제</S.Title>
          <S.Message>
            임시 저장한 글을 삭제하시겠습니까? 삭제한 글은 복구할 수 없습니다.
          </S.Message>
          <S.ButtonWrapper>
            <S.Button color="gray" onClick={onCancel}>
              취소
            </S.Button>
            <S.Button color="green" onClick={clickConfirmBtn}>
              확인
            </S.Button>
          </S.ButtonWrapper>
        </S.ModalContainer>
      </S.Layout>
    </>
  );
};

export default DeleteOkModal;
