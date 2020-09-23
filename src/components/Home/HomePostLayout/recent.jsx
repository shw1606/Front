/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// component

// custom hhoks
import { useInfiniteScroll } from "hooks";

// action
import { RECENT_POSTS_LOAD_REQUEST } from "store/actions/postAction";
import HomePostFallBackLayout from "../HomePostFallBackLayout";

// style
import * as S from "./style";

// lazy component
const HomePost = lazy(() => import("./HomePost"));

const Recent = () => {
  const dispatch = useDispatch();
  // 최근 게시글 리스트
  const recentPosts = useSelector((state) => state.postReducer.recentPosts);
  // fall back 출력 여부
  const showPostFallback = useSelector(
    (state) => state.postReducer.showPostFallback
  );
  // 인피니트 스크롤링 계속 해도 되는지 판단
  const hasMorePosts = useSelector(
    (state) => state.postReducer.hasMoreRecentPosts
  );

  // 최초로 게시글들을 불러오는 useEffect
  useEffect(() => {
    dispatch({
      type: RECENT_POSTS_LOAD_REQUEST,
    });
  }, []);

  // 인피니트 스크롤링
  useInfiniteScroll(recentPosts, hasMorePosts, 0.75, RECENT_POSTS_LOAD_REQUEST);

  return (
    <>
      <Suspense fallback="">
        <S.HomePostLayoutStyle>
          {recentPosts &&
            recentPosts.map((post, index) => (
              <HomePost key={index} data={post} />
            ))}
        </S.HomePostLayoutStyle>
      </Suspense>
      {showPostFallback || <HomePostFallBackLayout />}
    </>
  );
};

export default Recent;
