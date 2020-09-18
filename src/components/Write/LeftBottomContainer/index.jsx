import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// action
import { printAlert } from "store/actions/commonAction";
import { printWriteSettingLayout } from "store/actions/writeAction";

// style
import * as S from "./style";

const LeftBottomContainer = ({ history }) => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.write.title);
  const markdown = useSelector((store) => store.write.markdown);

  // 나가기 버튼 클릭
  const clickExitButton = useCallback(() => {
    history.goBack();
  }, [history]);

  // 임시저장 버튼 클릭
  const clickSaveButton = useCallback(() => {
    if (title && markdown) {
      dispatch(printAlert("save"));
      history.replace(`/write?id=${2}`);
    } else {
      dispatch(printAlert("saveError"));
    }
  }, [dispatch, markdown, title]);

  // 출간하기 버튼 클릭
  const clickSubmitButton = useCallback(() => {
    dispatch(printWriteSettingLayout(true));
  }, [dispatch]);

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

LeftBottomContainer.defaultProps = {
  history: {},
};

LeftBottomContainer.propTypes = {
  history: PropTypes.objectOf(
    PropTypes.oneOfType(PropTypes.func, PropTypes.object, PropTypes.string)
  ),
};

export default withRouter(LeftBottomContainer);
