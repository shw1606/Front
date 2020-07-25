import styled from 'styled-components';
import {Link} from "react-router-dom";
import {BsSearch} from "react-icons/all";

export const HeaderWrapper = styled.div`
    height: 60px;
    width: 100vw;
    margin: 0;
    padding: 0;
    background-color: blue;
`;
export const HeaderLayout = styled.div`
    display: flex;
`;

export const HeaderLogo = styled(Link)` 
    font-family: 'Fira Mono', monospace;
    position: relative;
    top: 3vh;
    left: 10vw;
    font-size: 2em;
    font-weight: bold;
    color: black;
`;

export const SearchBtn = styled(BsSearch)`
    margin: 3vh 0 0 60vw;
    width: 3.5vw;
    height: 3.5vh;
`;
