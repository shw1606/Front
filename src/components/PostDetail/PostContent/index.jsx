import React from "react";
import {useSelector} from "react-redux";
import ReactMarkdown from "react-markdown";
import * as S from './style';

const PostContent = () => {
  const post = useSelector((state) => state.postDetailReducer.postInfo);

  return (
    <S.ContentWrapper>
        <ReactMarkdown source={post.context}
                       escapeHtml={false}
        />
    </S.ContentWrapper>
  );
};

export default PostContent;
