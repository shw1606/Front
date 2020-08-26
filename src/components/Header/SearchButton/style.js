import styled from 'styled-components';
import {FiSearch} from "react-icons/all";

export const SearchButtonWrapper = styled.div`
    margin: 20px 0.5em 0 0;
    padding: 0.5em;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    &:hover {
        background-color: rgba(0,0,0,0.043);
    }
`;

export const SearchIcon = styled(FiSearch)`
    width: 18px;
    height: 18px;
    color: black;
`;
