import styled, { css } from "styled-components";
import { IoIosBookmark,
  MdArrowDropUp,
  MdArrowDropDown,
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from "react-icons/all";
import { Link } from "react-router-dom";

export const PostSeriesContainer = styled.div`
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 0px 4px 0px;
  position: relative;
  padding: 2rem 1.5rem;
  background: rgb(248, 249, 250);
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
`;

export const PostSeriesh2 = styled.h2`
  margin-bottom: 1.125rem;
  color: rgb(73, 80, 87);
  font-weight: bold;
  padding-right: 2rem;
  font-size: 1.5rem;
  a {
    color: inherit;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const SeriesList = styled.ol`
  padding-left: 0px;
  line-height: 1.8;
  font-size: 1rem;
  color: rgb(73, 80, 87);
  counter-reset: item 0;
  list-style-type: none;
`;

export const SeriesItemli = styled.li`
  ::before {
    content: counter(item) ". ";
    counter-increment: item 1;
    color: rgb(173, 181, 189);
    font-style: italic;
    margin-right: 0.25rem;
  }
`;
export const SeriesItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
  ${(props) =>
    props.active &&
    css`
      color: rgb(18, 184, 134);
      font-weight: bold;
    `}
`;

export const StyledIoIosBookmark = styled(IoIosBookmark)`
  fill: rgb(18, 184, 134);
  position: absolute;
  right: 1.5rem;
  top: 0px;
  width: 64px;
  height: 96px;
  margin-top: -23px;
  margin-right: -16px;
  overflow: hidden;
`;

export const StyledPostSeriesBottom = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hideButton {
    cursor: pointer;
  }
`;

export const StyledDropUp = styled(MdArrowDropUp)`
  margin-bottom: -7px;
  margin-right: 0.25rem;
`;

export const StyledDropDown = styled(MdArrowDropDown)`
  margin-bottom: -6px;
  margin-right: 0.25rem;
`;

export const StyledLeftArrow = styled(RiArrowLeftSLine)`
  stroke: currentcolor;
  fill: currentcolor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
`;
export const StyledRightArrow = styled(RiArrowRightSLine)`
  stroke: currentcolor;
  fill: currentcolor;
  stroke-width: 0;
  height: 1em;
  width: 1em;
`;
export const StyledButton = styled.button`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: rgb(18, 184, 134);
  cursor: pointer;
  border-radius: 50%;
  outline: none;
  background: white;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(241, 243, 245);
  border-image: initial;
  padding: 0px;

  & + & {
    margin-left: 0.375rem;
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: default;
      color: rgb(206, 212, 218);
      background: rgb(241, 243, 245);
      border-width: 1px;
      border-style: solid;
      border-color: rgb(233, 236, 239);
      border-image: initial;
    `};
`;
export const StyledIndexWrapper = styled.div`
  display: flex;
  align-items: center;
  .series-number {
    font-size: 0.875rem;
    color: rgb(173, 181, 189);
  }
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  margin-left: 1.125rem;
`;

export const ArrowButtonLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  height: 1em;
  width: 1em;
`;
