import React, { Suspense, useEffect } from "react";
import PropTypes from 'prop-types';
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
  }, [dispatch, username]);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_READ_POSTS_REQUEST);

  return (
    <>
      <Suspense fallback="">
        <S.ReadingListLayout>
          {posts && posts.map((post) => (
            <ReadingListCard
              key={post.id}
              author={post.author}
              title={post.title}
              thumbnail={post.thumbnail}
              content={post.content}
              avatar={post.avatar}
              heart={post.heart}
            />
          ))}
        </S.ReadingListLayout>
      </Suspense>
      {showPostFallback || <ReadingListFallBack />}
    </>
  );
};

ReadReadingList.propTypes = {
  username: PropTypes.string.isRequired
};

export default ReadReadingList;
