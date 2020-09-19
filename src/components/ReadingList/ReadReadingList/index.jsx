import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_READ_POSTS_REQUEST } from "store/actions/readingListAction";
import { useInfiniteScroll } from "hooks";
import * as S from "../LikedReadingList/style";
import ReadingListCard from "../ReadingListCard";
import ReadingListFallBack from "../ReadingListFallBack";

const ReadReadingList = ({ username }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.readingList.readPosts);

  const showPostFallback = useSelector((state) => state.readingList.showReadPostsFallback);
  const hasMorePosts = useSelector((state) => state.readingList.hasMoreReadPosts);

  useEffect(() => {
    dispatch({ type: LOAD_READ_POSTS_REQUEST, username });
  }, []);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_READ_POSTS_REQUEST);

  return (
    <>
      <Suspense fallback="">
        <S.ReadingListLayout>
          {posts && posts.map((post) =>
            <ReadingListCard data={post} key={post.id} />)}
        </S.ReadingListLayout>
      </Suspense>
      {showPostFallback || <ReadingListFallBack />}
    </>
  );
};

export default ReadReadingList;
