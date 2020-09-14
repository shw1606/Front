import React, { useEffect, Suspense } from "react";
import * as S from './style'
import { LOAD_LIKED_POSTS_REQUEST } from "store/actions/readingListAction";
import ReadingListCard from "../ReadingListCard";
import {useDispatch, useSelector} from "react-redux";
import {useInfiniteScroll} from "hooks";
import ReadingListFallBack from "../ReadingListFallBack";

const LikedReadingList = ({ username }) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.readingList.likedPosts);

  const showPostFallback = useSelector(state => state.readingList.showLikedPostsFallback);
  const hasMorePosts = useSelector(state => state.readingList.hasMoreLikedPosts);

  useEffect(() => {
    dispatch({ type: LOAD_LIKED_POSTS_REQUEST, username });
  }, []);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_LIKED_POSTS_REQUEST);

  return (
    <>
      <Suspense fallback="">
        <S.ReadingListLayout>
          {posts && posts.map(post =>
            <ReadingListCard data={post} key={post.id} />
          )}
        </S.ReadingListLayout>
      </Suspense>
      {showPostFallback || <ReadingListFallBack/>}
    </>
  );
};

export default LikedReadingList;