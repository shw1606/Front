import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

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
import RightContentsContainer from "../../components/PostDetail/RightContentsContainer";

const PostDetail = ({ match }) => {
  const dispatch = useDispatch();
  const postInfo = useSelector((state) => state.postDetailReducer.postInfo);

  useEffect(() => {
    const { author, title } = match.params;
    dispatch({
      type: LOAD_POST_DETAIL_REQUEST,
      data: { author, title },
    });
  }, [dispatch, match]);

  return (
    <>
      {postInfo ? (
        <Fragment>
          <LeftButtonsContainer />
          <RightContentsContainer/>
          <S.Container>
            <PostHeader />
            <PostSeries />
            <PostContent />
            <PostUserInfo />
            <PostSeriesNavigator />
            <CommentContainer />
          </S.Container>
        </Fragment>
      ) : null}
    </>
  );
};

export default PostDetail;
