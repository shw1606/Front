import { useEffect, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

/* args
> posts : 게시글 list
> hasMorePosts : 추가적인 게시글 load가 더 있는지
> ratio : 인피니트 스크롤링을 실행시킬 스크롤 비율
> action : dispatch의 action
*/
export default function useInfiniteScroll(posts, hasMorePosts, ratio, action) {
  const dispatch = useDispatch();
  const lastIdCount = useRef([]); // 마지막 게시글의 id를 담은 ref

  const loadPosts = useCallback(() => {
    const { clientHeight, scrollHeight } = document.documentElement;
    const minusClientHeight = scrollHeight - clientHeight; // 스크롤 높이 - 브라우저 높이
    const scrollRatio = window.scrollY / minusClientHeight; // 현재 스크롤 비율을 소수점 단위로 계산(0 ~ 0.5 ~ 1)

    // 스크롤 기준점을 넘기고 더 부를 게시글이 있는지 확인
    if (scrollRatio > ratio && hasMorePosts) {
      const lastPost = posts[posts.length - 1]; // 스크롤링으로 불러온 게시글들 중에서 마지막 게시글
      // id count 배열에 마지막 게시글 id가 포함되어 있지 않음을 확인
      if (!lastIdCount.current.includes(lastPost.id)) {
        dispatch({
          type: action,
          data: {
            id: lastPost.id,
          },
        });
      }
      lastIdCount.current.push(lastPost.id);
    }
  }, [action, dispatch, hasMorePosts, posts, ratio]);

  useEffect(() => {
    // 최초 게시글이 load 되기 전까지 scroll 이벤트 동작을 비할성화
    if (!posts.length) return;
    window.addEventListener("scroll", loadPosts);
    return () => {
      window.removeEventListener("scroll", loadPosts);
    };
  }, [loadPosts, posts.length]);
}
