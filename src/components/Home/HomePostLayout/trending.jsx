/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// component
import HomePostFallBackLayout from "../HomePostFallBackLayout";

// custom hhoks
import { useInfiniteScroll } from "hooks";

// style
import * as S from "./style";

// action
import { TRENDING_POSTS_LOAD_REQUEST } from "store/actions/postAction";

// lazy component
const HomePost = lazy(() => import("./HomePost"));

const Trending = () => {
  const dispatch = useDispatch();
  // 최근 게시글 리스트
  const posts = useSelector((state) => state.postReducer.posts);
  // 인피니트 스크롤링 계속 해도 되는지 판단
  const hasMorePosts = useSelector((state) => state.postReducer.hasMorePosts);
  // fall back 출력 여부
  const showPostFallback = useSelector(
    (state) => state.postReducer.showPostFallback
  );

  // 최초로 게시글들을 불러오는 useEffect
  useEffect(() => {
    dispatch({
      type: TRENDING_POSTS_LOAD_REQUEST,
    });
  }, []);

  // 인피니트 스크롤링
  useInfiniteScroll(posts, hasMorePosts, 0.75, TRENDING_POSTS_LOAD_REQUEST);

  return (
    <>
      <Suspense fallback="">
        <S.HomePostLayoutStyle>
          {posts &&
            posts.map((post, index) => <HomePost key={index} data={post} />)}
        </S.HomePostLayoutStyle>
      </Suspense>
      {showPostFallback || <HomePostFallBackLayout />}
    </>
  );
};

export default Trending;
