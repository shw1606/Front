import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

// action
import {
  printWriteSettingLayout,
  submitWrittedPostRequest,
} from "store/actions/writeAction";
import { printAlert } from "store/actions/commonAction";

// style
import * as S from "./style";

const FinalSubmitButton = ({
  clickSeiresPopUpBtn,
  clickList,
  seriesPopup,
  clickedList,
}) => {
  const dispatch = useDispatch();
  const postId = useSelector((store) => store.write.postId); // 게시글 id
  const title = useSelector((store) => store.write.title); // 제목
  const tagList = useSelector((store) => store.write.tagList); // 태그 리스트
  const markdown = useSelector((store) => store.write.markdown); // 게시글 본문
  const thumbnail = useSelector((store) => store.write.thumbnail); // 게시글 썸네일
  const access = useSelector((store) => store.write.access); // 게시글 공개 설정
  const postUrl = useSelector((store) => store.write.postUrl); // 게시글 공개 설정

  const [test, setTest] = useState(false);

  // 취소 버튼 클릭
  const clickCancelBtn = useCallback(() => {
    if (seriesPopup) {
      clickSeiresPopUpBtn();
      clickList("");
    } else {
      dispatch(printWriteSettingLayout(false));
    }
  }, [clickList, clickSeiresPopUpBtn, dispatch, seriesPopup]);

  // [선택하기], [출간하기] 버튼 클릭
  const clickSelectOrSubmit = useCallback(() => {
    if (clickedList && test) {
      clickSeiresPopUpBtn();
      clickList(clickedList);
      setTest(false);
    } else if (title === "") {
      dispatch(printAlert("emptyTitle"));
    } else {
      const data = {
        postId,
        title,
        tagList,
        markdown,
        thumbnail,
        access,
        postUrl,
        clickedList,
      };
      dispatch(submitWrittedPostRequest(data));
    }
  }, [
    test,
    postId,
    title,
    tagList,
    markdown,
    access,
    thumbnail,
    postUrl,
    clickedList,
  ]);

  useEffect(() => {
    if (clickedList) {
      setTest(true);
    } else {
      setTest(false);
    }
  }, [clickedList]);

  return (
    <>
      <S.Layout>
        <S.Button onClick={clickCancelBtn} background="rgb(134, 142, 150)">
          취소
        </S.Button>
        <S.Button
          background="rgb(18, 184, 134)"
          onClick={clickSelectOrSubmit}
          seriesPopup={seriesPopup}
          clickedList={clickedList}
        >
          {seriesPopup ? "선택하기" : "출간하기"}
        </S.Button>
      </S.Layout>
    </>
  );
};

FinalSubmitButton.defaultProps = {
  clickSeiresPopUpBtn: () => {},
  clickList: () => {},
  seriesPopup: false,
  clickedList: "",
};

FinalSubmitButton.propTypes = {
  clickSeiresPopUpBtn: PropTypes.func,
  clickList: PropTypes.func,
  seriesPopup: PropTypes.bool,
  clickedList: PropTypes.string,
};

export default FinalSubmitButton;
