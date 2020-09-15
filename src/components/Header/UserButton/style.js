import styled from "styled-components";
import { FaRegUserCircle, TiArrowSortedDown } from "react-icons/all";
import { NavLink } from "react-router-dom";

export const UserButtonWrapper = styled.div`
  display: flex;
`;

export const WriteBtn = styled(NavLink)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
  width: 82px;
  height: 24px;
  font-size: 11px;
  font-weight: bold;
  color: #343a40;
  border: 1.5px solid #343a40;
  cursor: pointer;
  border-radius: 15px;
  background-color: #fff;
  &:hover {
    background-color: #212529;
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`;

export const DropdownBtn = styled.div`
  display: flex;
`;

export const ArrowDown = styled(TiArrowSortedDown)`
  position: relative;
  margin-left: 5px;
  top: 9px;
  width: 18px;
  height: 18px;
  color: #d4d4d4;
  &:hover {
    color: #212529;
  }
`;

export const UserProfile = styled(FaRegUserCircle)`
  color: #343a40;
  width: 30px;
  height: 30px;
`;

export const DropdownMenuWrapper = styled.div`
  font-size: 3vh;
  float: right;
  position: relative;
  border: none;
  margin: 17px 0 0 12px;
  padding: 0;
  cursor: pointer;
`;

export const DropdownContent = styled.div`
  position: absolute;
  background-color: white;
  width: 170px;
  margin-top: 0.3em;
  right: 0;
  border-radius: 2%;
  border: 1px solid #d4d4d4;
  z-index: 200;
`;

export const StyledLink = styled(NavLink)`
  color: black;
  padding: 10px;
  font-size: 12px;
  text-decoration: none;
  display: block;
  &:hover {
    color: black;
    padding: 10px;
    font-size: 12px;
    text-decoration: none;
    background-color: rgba(0, 0, 0, 0.043);
  }
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 1em 0.5em 1em 0.5em;
  font-size: 2vh;
  min-height: 2vh;
  text-decoration: none;
  display: block;
  border-bottom: 0.1em solid #d4d4d4;
`;
