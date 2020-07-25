import styled from 'styled-components';
import { LOGIN_BUTTON } from "components/Styles/Header";

export const LoginBtn = styled.button`
    margin: 20px 0 0 0;
    width: 60px;
    height: 24px;
    font-weight: bold;
    font-size: 12px;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 15px; 
    background-color: ${LOGIN_BUTTON.COLOR};
    &:hover {
        background-color: ${LOGIN_BUTTON.COLOR_ON_HOVER}
    }
    &:focus {
        outline: none;
    }
`;