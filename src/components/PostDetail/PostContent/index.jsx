import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import MarkdownViewer from "../../Common/MarkdownViewer";
import parseHeadings from "../PostToc/parseHeadings";

const PostContent = () => {
  const content = useSelector((state) => state.postDetailReducer.postInfo.context);

  useEffect(() => {
    if(!content) return;
    const toc = parseHeadings(content);
    console.log(toc);

  });

  return (
    <MarkdownViewer content={content} />
  );
};

export default PostContent;