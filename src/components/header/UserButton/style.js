import styled from 'styled-components';
import {FaRegUserCircle, TiArrowSortedDown} from "react-icons/all";
import { USER_BUTTON } from "components/Styles/Header";

import { NavLink } from "react-router-dom";

export const UserButtonWrapper = styled.div`
    display: flex;
    width: 10vw;
`;

export const WriteBtn = styled.button`
    width: 10vw;
    height: 3vh;
`;

export const DropdownBtn = styled.div`
    display: flex;
    top: 1vh;
    right: 1vw;
    height: 6vh;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
    margin: 0.5em 0 0 0.1em;
    color: ${USER_BUTTON.COLOR};
    &:hover {
        color: ${USER_BUTTON.COLOR_ON_HOVER};
    }
`;

export const UserProfile = styled(FaRegUserCircle)`
    color: ${USER_BUTTON.COLOR_ON_HOVER};
    width: 3vw;
    height: 3vh;
`;

export const DropdownMenuWrapper = styled.div`
    font-size: 3vh;
    float: right;
    position: relative;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
`;

export const DropdownContent = styled.div`
    position: absolute;
    background-color: #f9f9f9;
    min-width: 20vw;
    margin-top: 0.3em;
    right: 0; 
    border-radius: 2%;
    border: 0.1em solid ${USER_BUTTON.BORDER_COLOR};
    z-index: 200;
`;

export const StyledLink = styled(NavLink)`
    color: black;
    padding: 1em 0.5em 1em 0.5em;
    font-size: 2vh;
    text-decoration: none;
    display: block;
    &:hover {
        color: black;
        text-decoration: none;
        background-color: ${USER_BUTTON.COLOR};
    }
`;

export const DropdownItem = styled.div`
    color: black;
    padding: 1em 0.5em 1em 0.5em;
    font-size: 2vh;
    min-height: 2vh;
    text-decoration: none;
    display: block;
    border-bottom: 0.1em solid ${USER_BUTTON.BORDER_COLOR}
`;