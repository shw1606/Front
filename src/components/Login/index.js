import React from 'react';
import {
    LoginModalLayout,
    LoginTitle,
    EmailLoginTitle,
    EmailLoginForm,
    EmailLoginButton,
    SocialLoginTitle,
    EmailLoginFormWrapper,
    SocialLoginWrapper,
    GoogleLoginButton,
    FacebookLoginButton,
    GithubLoginButton, RegisterTitleWrapper, RegisterTitle, RegisterLink,
} from "./style";

const Login = () => {
  return (
      <LoginModalLayout>
          <LoginTitle> 로그인 </LoginTitle>
          <EmailLoginTitle> 이메일로 로그인 </EmailLoginTitle>
          <EmailLoginFormWrapper>
              <EmailLoginForm placeholder="이메일을 입력하세요."/>
              <EmailLoginButton> 로그인 </EmailLoginButton>
          </EmailLoginFormWrapper>
          <SocialLoginTitle> 소셜 계정으로 로그인 </SocialLoginTitle>
          <SocialLoginWrapper>
              <GithubLoginButton/>
              <GoogleLoginButton/>
              <FacebookLoginButton/>
          </SocialLoginWrapper>
          <RegisterTitleWrapper>
              <RegisterTitle> 아직 회원이 아니신가요? </RegisterTitle>
              <RegisterLink to="/"> 회원가입 </RegisterLink>
          </RegisterTitleWrapper>
      </LoginModalLayout>
  );
};

export default Login;