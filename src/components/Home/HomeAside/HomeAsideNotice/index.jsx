import React, { useState } from "react";
import NoticeItem from "./NoticeItem";
import * as S from "./style";
import { useSelector } from "react-redux";

const HomeAsideNotice = () => {
  const [notices, setNotices] = useState([
    {
      id: 1,
      href: "/@user_id/수식-입력-및-외부-서비스-개체-삽입-기능-업데이트",
      text: "수식 입력 및 외부 서비스 개체 삽입 기능 업데이트",
      date: "2020년 3월 31일",
    },
    {
      id: 2,
      href: "/@user_id/업데이트-안내-:-읽기-목록",
      text: "업데이트 안내 : 읽기 목록",
      date: "2020년 3월 14일",
    },
    {
      id: 3,
      href: "/@user_id/벨로그-v2-업데이트-안내",
      text: "벨로그 v2 업데이트 안내",
      date: "2020년 2월 10일",
    },
  ]);

  // const notices = useSelector((state) => state.NoticeReducer.Notice);

  return (
    <section>
      <S.StyledNoticeTitle>공지사항</S.StyledNoticeTitle>
      <S.StyledNoticeList>
        {notices.map((notice) => (
          <NoticeItem notice={notice} key={notice.id} />
        ))}
      </S.StyledNoticeList>
    </section>
  );
};
export default HomeAsideNotice;
