import styled from 'styled-components';
import {FiSearch} from "react-icons/all";
import {SEARCH_BUTTON} from "../../Styles/Header";

export const SearchButtonWrapper = styled.div`
    margin: 20px 0.5em 0 0;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    &:hover {
        background-color: ${SEARCH_BUTTON.COLOR};
    }
`;

export const SearchIcon = styled(FiSearch)`
    width: 15px;
    height: 15px;
    margin: 7px;
    color: black;
    cursor: pointer;
`;