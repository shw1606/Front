import React from 'react';
import * as S from './style';
import dummy from 'saga/postDetailDummy.json';
import MarkdownViewer from "../../Common/MarkdownViewer";

const UserAbout = () => {
  const about = null;

  return (
    <>
      {about
        ? <MarkdownViewer content={about}/>
        : <S.UserAboutNotFound> 소개가 작성되지 않았습니다. </S.UserAboutNotFound>
      }
    </>
  );
};

export default UserAbout;