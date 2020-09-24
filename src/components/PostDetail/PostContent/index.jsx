import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MarkdownViewer from "../../Common/MarkdownViewer";
import { parseHeadings, setHeadingId } from "../PostToc/utils";
import { SET_TOC_REQUEST } from "store/actions/postDetailAction";
import * as S from "./style";

const PostContent = () => {
  const dispatch = useDispatch();
  const content = useSelector((state) => state.postDetailReducer.postInfo.context);

  useEffect(() => {
    if(!content) return;
    const toc = parseHeadings(content);
    dispatch({ type: SET_TOC_REQUEST, toc });

  },[dispatch, content]);

  return (
    <S.ContentLayout>
      <MarkdownViewer content={content} />
    </S.ContentLayout>
  );
};

export default PostContent;