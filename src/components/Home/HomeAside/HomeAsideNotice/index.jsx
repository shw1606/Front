import React, { useEffect } from "react";
import NoticeItem from "./NoticeItem";
import * as S from "./style";
import { useSelector, useDispatch } from "react-redux";
import { NOTICE_LOAD_REQUEST } from "store/actions/postAction";

const HomeAsideNotice = () => {
  const dispatch = useDispatch();
  const notices = useSelector((state) => state.postReducer.notices);
  useEffect(() => {
    dispatch({
      type: NOTICE_LOAD_REQUEST,
    });
  }, []);

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
