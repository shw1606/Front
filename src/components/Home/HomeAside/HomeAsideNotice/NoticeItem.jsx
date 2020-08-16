import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const NoticeItem = ({ notice, className }) => {
  const { title, updated_at, author } = notice;
  const date = updated_at.substring(0, 10).split("-");
  return (
    <li className={className}>
      <S.StyledListh5>
        <Link to={`/@${author}/${title}`}>{title}</Link>
      </S.StyledListh5>
      <S.StyledDate className="date">{`${date[0]}년 ${date[1]}월 ${date[2]}일`}</S.StyledDate>
    </li>
  );
};
export default NoticeItem;
