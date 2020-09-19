import styled from 'styled-components';
import { FiSearch } from "react-icons/all";

export const SearchBarWrapper = styled.div`
    position: relative;
    width: 750px;
    height: 50px;
    margin: 0 auto;
    padding: 0;
    @media (max-width: 767px) {
        width: 100%;
        margin: 0 auto 0 auto;
        height: 30px;
     }
`;

export const SearchInput = styled.input`
    width: 750px;
    height: 50px;
    margin-top: 25px;
    border: 1px solid black;
    font-size: 1.2em;
    padding-left: 3em;
    @media (max-width: 767px) {
        width: 100%;
        margin: 0 auto;
        height: 30px;
     }
`;

export const SearchIcon = styled(FiSearch)`
    width: 2em;
    height: 1.5em;
    position: absolute;
    top: 40px;
    left: 1em;
    @media (max-width: 767px) {
        top: 20%;
     }
`;
