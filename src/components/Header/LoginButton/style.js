import styled from 'styled-components';

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
    background-color: #343a40;
    &:hover {
        background-color: #868e96;
    }
    &:focus {
        outline: none;
    }
`;