import React from 'react';
import * as S from "./style";

const Login = () => {
  return (
      <S.LoginModalLayout>
          <S.LoginTitle> 로그인 </S.LoginTitle>
          <S.EmailLoginTitle> 이메일로 로그인 </S.EmailLoginTitle>
          <S.EmailLoginFormWrapper>
              <S.EmailLoginForm placeholder="이메일을 입력하세요."/>
              <S.EmailLoginButton> 로그인 </S.EmailLoginButton>
          </S.EmailLoginFormWrapper>
          <S.SocialLoginTitle> 소셜 계정으로 로그인 </S.SocialLoginTitle>
          <S.SocialLoginWrapper>
              <S.GithubLoginButton/>
              <S.GoogleLoginButton/>
              <S.FacebookLoginButton/>
          </S.SocialLoginWrapper>
          <S.RegisterTitleWrapper>
              <S.RegisterTitle> 아직 회원이 아니신가요? </S.RegisterTitle>
              <S.RegisterLink to="/"> 회원가입 </S.RegisterLink>
          </S.RegisterTitleWrapper>
      </S.LoginModalLayout>
  );
};

export default Login;