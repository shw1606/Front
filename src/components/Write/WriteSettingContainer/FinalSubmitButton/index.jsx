import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// action
import { printWriteSettingLayout } from "store/actions/writeAction";

// style
import * as S from "./style";

const FinalSubmitButton = ({
  clickSeiresPopUpBtn,
  clickList,
  seriesPopup,
  clickedList,
}) => {
  const dispatch = useDispatch();
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
    } else {
      console.log("submit");
    }
  }, [clickedList, test, clickSeiresPopUpBtn, clickList]);

  useEffect(() => {
    if (clickedList) {
      setTest(true);
    } else {
      setTest(false);
    }
  }, [clickList, clickedList]);

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

export default FinalSubmitButton;
