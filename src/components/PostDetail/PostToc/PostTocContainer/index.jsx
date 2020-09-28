import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import * as S from './style';
import { getScrollTop } from "../utils";

const PostTocContainer = () => {
  const toc = useSelector((state) => state.postDetailReducer.toc);
  const [activeId, setActiveId] = useState(null);
  const [headingTops, setHeadingTops] = useState(null);

  const updateTocPositions = useCallback(() => {
    if (!toc) return;
    const scrollTop = getScrollTop();

    const currentHeadingTops = toc.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) {
        return {
          id,
          top: 0,
        };
      }
      const top = el.getBoundingClientRect().top + scrollTop;
      return {
        id,
        top,
      };
    });

    setHeadingTops(currentHeadingTops);
  }, [toc]);

  useEffect(() => {
    updateTocPositions();
    let prevScrollHeight = document.body.scrollHeight;
    let timeoutId = null;

    function checkScrollHeight() {
      const { scrollHeight } = document.body;
      if (prevScrollHeight !== scrollHeight) {
        updateTocPositions();
      }
      prevScrollHeight = scrollHeight;
      timeoutId = setTimeout(checkScrollHeight, 250);
    }

    timeoutId = setTimeout(checkScrollHeight, 250);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [updateTocPositions]);

  const onScroll = useCallback(() => {
    const scrollTop = getScrollTop();

    if (!headingTops) return;

    const currentHeading = [...headingTops].reverse().find((headingTop) =>
      scrollTop >= headingTop.top - 8);

    if (!currentHeading) {
      setActiveId(null);
      return;
    }

    setActiveId(currentHeading.id);
  }, [headingTops]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  if (!toc || !headingTops) return null;

  return (
    <S.TocWrapper>
      {toc.map((item) => (
        <S.TocItem
          key={item.id}
          active={activeId === item.id}
          level={item.level}
        >
          <a href={`#${item.id}`}>{item.text}</a>
        </S.TocItem>
      ))}
    </S.TocWrapper>
  );
};

export default PostTocContainer;
