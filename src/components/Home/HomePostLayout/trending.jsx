/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

// style
import HomePostLayoutStyle from "./style";

// action
import { POSTS_LOAD_REQUEST } from "store/actions/postAction";

// component
import HomePostFallBackLayout from "../HomePostFallBackLayout";

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
  // 마지막 게시글의 id를 담은 ref
  const lastIdCount = useRef([]);

  // 인피니트 스크롤링 useCallback
  const loadPosts = useCallback(() => {
    const { clientHeight, scrollHeight } = document.documentElement;
    const minusClientHeight = scrollHeight - clientHeight; // 스크롤 높이 - 문서 높이
    const scrollRatio = window.scrollY / minusClientHeight; // 현재 스크롤 위치에 대한 비율

    // 스크롤 비율이 0.75% 이상이고, hasMorePosts이 true인지 판단
    if (scrollRatio > 0.75 && hasMorePosts) {
      const lastPost = posts[posts.length - 1];
      // 마지막 게시글 좋아요가 lastPost가 포함되있는지 판단(임의)
      if (!lastIdCount.current.includes(lastPost.heart)) {
        dispatch({
          type: POSTS_LOAD_REQUEST,
          data: {
            id: lastPost.id,
            heart: lastPost.heart,
          },
        });
      }
      // 마지막 게시글 좋아요 갯수 추가(임의)
      lastIdCount.current.push(lastPost.heart);
    }
  }, [hasMorePosts, posts]);

  // 인피니트 스크롤링 useEffect
  useEffect(() => {
    if (!posts.length) return;
    window.addEventListener("scroll", loadPosts);
    return () => window.removeEventListener("scroll", loadPosts);
  }, [posts]);

  // 최초로 게시글들을 불러오는 useEffect
  useEffect(() => {
    dispatch({
      type: POSTS_LOAD_REQUEST,
    });
  }, []);

  return (
    <>
      <Suspense fallback="">
        <HomePostLayoutStyle>
          {posts &&
            posts.map((post, index) => <HomePost key={index} data={post} />)}
        </HomePostLayoutStyle>
      </Suspense>
      {showPostFallback || <HomePostFallBackLayout />}
    </>
  );
};

export default Trending;
