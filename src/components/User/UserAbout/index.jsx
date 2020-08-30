import React, {useEffect} from 'react';
import * as S from './style';
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_INTRODUCTION_REQUEST } from "store/actions/userAction";
import MarkdownViewer from "components/Common/MarkdownViewer";

const UserAbout = () => {
  const dispatch = useDispatch();
  const about = useSelector(state => state.userReducer.userInstruction);

  useEffect(() => {
    dispatch({type: LOAD_USER_INTRODUCTION_REQUEST })
  }, []);

  return (
    <>
      {about
        ? <MarkdownViewer content={about.context}/>
        : <S.UserAboutNotFound> 소개가 작성되지 않았습니다. </S.UserAboutNotFound>
      }
    </>
  );
};

export default UserAbout;