import React from "react";
import {useSelector} from "react-redux";
import MarkdownViewer from "../../Common/MarkdownViewer";

const PostContent = () => {
  const content = useSelector((state) => state.postDetailReducer.postInfo.context);
  return (
    <MarkdownViewer content={content} />
  );
};

export default PostContent;