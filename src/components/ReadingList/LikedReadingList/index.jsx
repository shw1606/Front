import React, { useEffect, Suspense } from "react";
import { LOAD_LIKED_POSTS_REQUEST } from "store/actions/readingListAction";
import { useDispatch, useSelector } from "react-redux";
import { useInfiniteScroll } from "hooks";
import PropTypes from "prop-types";
import ReadingListCard from "../ReadingListCard";
import * as S from './style';
import ReadingListFallBack from "../ReadingListFallBack";

const LikedReadingList = ({ username }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.readingList.likedPosts);

  const showPostFallback = useSelector((state) => state.readingList.showLikedPostsFallback);
  const hasMorePosts = useSelector((state) => state.readingList.hasMoreLikedPosts);

  useEffect(() => {
    dispatch({ type: LOAD_LIKED_POSTS_REQUEST, username });
  }, [username, dispatch]);

  useInfiniteScroll(posts, hasMorePosts, 0.75, LOAD_LIKED_POSTS_REQUEST);

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

LikedReadingList.propTypes = {
  username: PropTypes.string.isRequired
};

export default LikedReadingList;
