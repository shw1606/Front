import React from 'react';
import dummy from 'saga/postDetailDummy.json';
import MarkdownViewer from "../../Common/MarkdownViewer";

const UserAbout = () => {
  const about = dummy.data.context;

  return (
    <MarkdownViewer content={about} />
  );
};

export default UserAbout;