/* eslint-disable consistent-return */
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BsArrowLeft } from "react-icons/bs";

// action
import { printAlert } from "store/actions/commonAction";
import { printWriteSettingLayout } from "store/actions/writeAction";
import { submitSavedPostRequest } from "store/actions/writeAction";
import { exitWritePage } from "store/actions/writeAction";

// style
import * as S from "./style";

const LeftBottomContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const title = useSelector((store) => store.write.title);
  const markdown = useSelector((store) => store.write.markdown);
  const tagList = useSelector((store) => store.write.tagList);
  const postId = useSelector((store) => store.write.postId);

  // 나가기 버튼 클릭
  const clickExitButton = useCallback(() => {
    history.goBack();
    dispatch(exitWritePage());
  }, []);

  // 임시저장 버튼 클릭
  const clickSaveButton = useCallback(() => {
    if (title && markdown) {
      dispatch(printAlert("save"));
      dispatch(submitSavedPostRequest({ title, markdown, tagList }));
    } else {
      dispatch(printAlert("saveError"));
    }
  }, [dispatch, markdown, title, tagList]);

  // 출간하기 버튼 클릭
  const clickSubmitButton = useCallback(() => {
    dispatch(printWriteSettingLayout(true));
  }, [dispatch]);

  // url에 postId 추가
  const [replaceUrl, setReplaceUrl] = useState(false);
  useEffect(() => {
    if (!postId) return;
    history.replace(`?id=${postId}`);
    setReplaceUrl(true);
  }, [postId]);

  // 10초 후 임시저장
  const count = useRef(0);
  useEffect(() => {
    if (title === "" || markdown === "") return;
    if (replaceUrl === false) return;
    const data = { title, markdown, tagList };
    let timeId = 0;
    setTimeout(() => {
      count.current += 1;
      if (postId) {
        const mergeData = { ...data, ...{ postId } };
        timeId = dispatch(submitSavedPostRequest(mergeData, count.current));
      } else {
        timeId = dispatch(submitSavedPostRequest(data, count.current));
      }
    }, 0);
    return () => {
      clearTimeout(timeId);
    };
  }, [title, markdown, tagList, postId, replaceUrl]);

  return (
    <>
      <S.Layout>
        <S.ExitButton onClick={clickExitButton}>
          <BsArrowLeft />
          <span>나가기</span>
        </S.ExitButton>
        <S.ButtonsWrapper className="buttons-wrapper">
          <S.RightButton color="save" onClick={clickSaveButton}>
            임시저장
          </S.RightButton>
          <S.RightButton color="submit" onClick={clickSubmitButton}>
            출간하기
          </S.RightButton>
        </S.ButtonsWrapper>
      </S.Layout>
    </>
  );
};

export default LeftBottomContainer;
