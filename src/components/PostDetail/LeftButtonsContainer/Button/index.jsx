import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

// style
import * as S from "./style";

const Button = ({ icon, action, click, pageUrl, openSocialButtons }) => {
  const dispatch = useDispatch();
  const clickBtn = useCallback(() => {
    openSocialButtons();
    click(pageUrl);
    dispatch(action);
  }, [click, action, dispatch, openSocialButtons, pageUrl]);

  return (
    <>
      <S.ButtonWrapper onClick={clickBtn}>{new icon()}</S.ButtonWrapper>
    </>
  );
};

export default Button;
