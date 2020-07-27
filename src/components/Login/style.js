import styled from 'styled-components';
import {FaFacebook, FcGoogle, GoMarkGithub} from "react-icons/all";
import {Link} from "react-router-dom";

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
    color: rgba(0,0,0,0.4);
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
`;

export const EmailLoginButton = styled.div`
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
 
`;

export const SocialLoginTitle = styled.div`
    font-size: 11px;
    font-weight: bold;
    color: rgba(0,0,0,0.4);
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
    color: #4267B2;
`;

export const RegisterTitleWrapper = styled.div`
    display: flex;
    position: absolute; 
    bottom: 0;
    right: 0;
    padding: 0 1em 1em 0 ;
`;

export const RegisterTitle = styled.div`
    font-size: 11px;
    margin-right: 2em;
`;

export const RegisterLink = styled(Link)`
    font-size: 11px;
    font-weight: bold;
    color: #12b886;
`;