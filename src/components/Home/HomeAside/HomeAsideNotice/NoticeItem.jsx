import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const NoticeItem = ({ notice, className }) => {
  const { href, text, date } = notice;
  return (
    <li className={className}>
      <S.StyledListh5>
        <Link to={href}>{text}</Link>
      </S.StyledListh5>
      <S.StyledDate className="date">{date}</S.StyledDate>
    </li>
  );
};
export default NoticeItem;
