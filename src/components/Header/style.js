import styled from 'styled-components';
import {Link} from "react-router-dom";

export const HeaderLayout = styled.div`
    display: flex;
    justify-content: space-between;
    height: 60px;
    margin: 0;
    padding: 0;
`;

export const HeaderLogo = styled(Link)` 
    font-family: 'Fira Mono', monospace;
    margin: 1em 0 0 0;
    font-size: 1.8em;
    font-weight: bold;
    color: black;
`;

export const Menu = styled.div`
    display: flex;
`;

