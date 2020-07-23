import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderLayout = styled.div`
    display: flex;

`;

export const HeaderLogo = styled(Link)` 
    font-family: 'Fira Mono', monospace;
    position: relative;
    top: 3vh;
    left: 10vw;
    font-size: 3.5vh;
    font-weight: bold;
    color: black;
`;

