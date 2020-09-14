import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import MarkdownViewer from "../../Common/MarkdownViewer";
import parseHeadings from "../PostToc/parseHeadings";
import { SET_TOC_REQUEST } from "store/actions/postDetailAction";

const PostContent = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.postDetailReducer.postInfo.context);

  useEffect(() => {
    if(!content) return;
    const toc = parseHeadings(content);
    dispatch({ type: SET_TOC_REQUEST, toc });
  },[]);

  return (
    <MarkdownViewer content={content} />
  );
};

export default PostContent;