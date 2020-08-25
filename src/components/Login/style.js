import styled from "styled-components";
import { FaFacebook, FcGoogle, GoMarkGithub } from "react-icons/all";
import { Link } from "react-router-dom";

export const LoginModalLayout = styled.div`
  margin: 0;
  padding: 0;
  height: 300px;
`;

export const LoginTitle = styled.div`
  margin: 20px 0 20px 0;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  color: black;
`;

export const EmailLoginTitle = styled.div`
  font-size: 11px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
`;

export const EmailLoginFormWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  height: 36px;
  width: 380;
`;
export const EmailLoginForm = styled.input`
  width: 320px;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding-left: 1em;
  font-size: 11px;
  color: #d4d4d4;
  &:disabled {
    background: rgb(241, 243, 245);
  }
`;

export const EmailLoginButton = styled.button`
  width: 80px;
  background: #12b886;
  margin-left: -2px;
  color: white;
  padding: 1em;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &:disabled {
    color: rgb(222, 226, 230);
    cursor: default;
    background: rgb(173, 181, 189);
  }
`;

export const SocialLoginTitle = styled.div`
  font-size: 11px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.4);
  margin-top: 20px;
`;

export const SocialLoginWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
`;

export const GithubLoginButton = styled(GoMarkGithub)`
  width: 33px;
  height: 33px;
  cursor: pointer;
`;

export const GoogleLoginButton = styled(FcGoogle)`
  width: 33px;
  height: 33px;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #d4d4d4;
`;

export const FacebookLoginButton = styled(FaFacebook)`
  width: 33px;
  height: 33px;
  cursor: pointer;
  color: #4267b2;
`;

export const RegisterTitleWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 1em 1em 0;
`;

export const RegisterTitle = styled.div`
  font-size: 11px;
  margin-right: 1em;
`;

export const RegisterLink = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: #12b886;
  cursor: pointer;
`;

export const SentInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: rgb(12, 166, 120);
  background: rgb(195, 250, 232);
  border-width: 1px;
  border-style: solid;
  border-color: rgb(150, 242, 215);
  border-image: initial;
  svg {
    font-size: 1.5rem;
  }
  span {
    font-size: 0.875rem;
    text-align: center;
    flex: 1 1 0%;
  }
`;
