import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// componenets
import CommentContainer from "components/PostDetail/CommentContainer";
import LeftButtonsContainer from "components/PostDetail/LeftButtonsContainer";
import PostContent from "components/PostDetail/PostContent";
import PostHeader from "components/PostDetail/PostHeader";
import PostSeries from "components/PostDetail/PostSeries";
import PostSeriesNavigator from "components/PostDetail/PostSeriesNavigator";
import PostUserInfo from "components/PostDetail/PostUserInfo";

// action
import { LOAD_POST_DETAIL_REQUEST } from "store/actions/postDetailAction";

// style
import * as S from "./style";

const PostDetail = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { author, title } = match.params;
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
      data: { author, title },
    });
  }, [dispatch, match]);

  return (
    <>
      <S.Container>
        <LeftButtonsContainer />
        <PostHeader />
        <PostSeries />
        <PostContent />
        <PostUserInfo />
        <PostSeriesNavigator />
        <CommentContainer />
      </S.Container>
    </>
  );
};

export default PostDetail;
