import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { BsCheck } from "react-icons/bs";

// action
import { submitSignUp, submitSignIn } from "store/actions/modalAction";

// style
import * as S from "./style";

const Login = () => {
  const dispatch = useDispatch();
  const sentEmail = false;
  const isUser = false;
  const [loginStatus, setLoginStatus] = useState(true);
  const [emailText, setEmailText] = useState("");

  const inputRef = useRef();
  const buttonRef = useRef();

  // Modal UI 전환 버튼
  const clickConvertBtn = useCallback(() => {
    setLoginStatus((prev) => !prev);
  }, []);

  // 이메일 인풋값 변경
  const changeEmailText = useCallback((event) => {
    setEmailText(event.target.value);
  }, []);

  // 이메일 텍스트 전송 버튼
  const clickSubmitBtn = useCallback(
    (event) => {
      event.preventDefault();
      buttonRef.current.disabled = true;
      inputRef.current.disabled = true;
      if (loginStatus) {
        dispatch(submitSignIn(emailText));
      } else {
        dispatch(submitSignUp(emailText));
      }
    },
    [dispatch, emailText, loginStatus]
  );

  return (
    <S.LoginModalLayout>
      <S.LoginTitle>{loginStatus ? "로그인" : "회원가입"}</S.LoginTitle>
      <S.EmailLoginTitle>
        이메일로
        {' '}
        {loginStatus ? "로그인" : "회원가입"}
      </S.EmailLoginTitle>
      <S.EmailLoginFormWrapper>
        {sentEmail ? (
          <S.SentInputContainer>
            <BsCheck />
            <span>
              {isUser ? "로그인" : "회원가입"}
              {' '}
              링크가 이메일로 전송되었습니다.
            </span>
          </S.SentInputContainer>
        ) : (
          <>
            <S.EmailLoginForm
              placeholder="이메일을 입력하세요."
              onChange={changeEmailText}
              ref={inputRef}
            />
            <S.EmailLoginButton ref={buttonRef} onClick={clickSubmitBtn}>
              {loginStatus ? "로그인" : "회원가입"}
            </S.EmailLoginButton>
          </>
        )}
      </S.EmailLoginFormWrapper>
      <S.SocialLoginTitle>
        소셜 계정으로
        {' '}
        {loginStatus ? "회원가입" : "로그인"}
      </S.SocialLoginTitle>
      <S.SocialLoginWrapper>
        <S.GithubLoginButton />
        <S.GoogleLoginButton />
        <S.FacebookLoginButton />
      </S.SocialLoginWrapper>
      <S.RegisterTitleWrapper>
        <S.RegisterTitle>
          {loginStatus ? "아직 회원이 아니신가요?" : "계정이 이미 있으신가요?"}
        </S.RegisterTitle>
        <S.RegisterLink onClick={clickConvertBtn}>
          {loginStatus ? "회원가입" : "로그인"}
        </S.RegisterLink>
      </S.RegisterTitleWrapper>
    </S.LoginModalLayout>
  );
};

export default Login;
