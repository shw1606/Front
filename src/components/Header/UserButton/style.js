import styled from 'styled-components';
import {FaRegUserCircle, TiArrowSortedDown} from "react-icons/all";
import { USER_BUTTON } from "components/Styles/Header";

import { NavLink } from "react-router-dom";

export const UserButtonWrapper = styled.div`
    display: flex;
`;

export const WriteBtn = styled.button`
    margin: 20px 0 0 0;
    width: 82px;
    height: 24px;
    font-size: 11px;
    font-weight: bold;
    color: ${USER_BUTTON.TEXT_COLOR};
    border: 1.5px solid ${USER_BUTTON.TEXT_COLOR};
    cursor: pointer;
    border-radius: 15px; 
    background-color: ${USER_BUTTON.COLOR};
    &:hover {
        background-color: ${USER_BUTTON.COLOR_ON_HOVER};
        color: ${USER_BUTTON.COLOR};
    }
    &:focus {
        outline: none;
    }
`;

export const DropdownBtn = styled.div`
    display: flex;
    width: px;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
    margin: 0.5em 0 0 3px;
    color: ${USER_BUTTON.BORDER_COLOR};
    &:hover {
        color: ${USER_BUTTON.COLOR_ON_HOVER};
    }
`;

export const UserProfile = styled(FaRegUserCircle)`
    color: ${USER_BUTTON.TEXT_COLOR};
    width: 30px;
    height: 30px;
`;

export const DropdownMenuWrapper = styled.div`
    font-size: 3vh;
    float: right;
    position: relative;
    border: none;
    margin: 17px 0 0 1em;
    padding: 0;
    cursor: pointer;
`;

export const DropdownContent = styled.div`
    position: absolute;
    background-color: white;
    width: 150px;
    margin-top: 0.3em;
    right: 0; 
    border-radius: 2%;
    border: 1px solid ${USER_BUTTON.BORDER_COLOR};
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
        background-color: ${USER_BUTTON.DROPDOWN_CONTENT_COLOR};
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