import React, { useState } from 'react';
import * as S from './style';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PostTocContainer = () => {
  const toc = useSelector(state => state.postDetailReducer.toc);
  const [activeId, setActiveId] = useState(null);

  if (!toc) return null;

  console.log(toc);

  return (
    <S.TocWrapper>
      {toc.map(item =>
        <S.TocItem key={item.id}
                   active={activeId === item.id}
                   level={item.level}>
          <Link to={`#${item.id}`}>{item.text}</Link>
        </S.TocItem>
      )}
    </S.TocWrapper>
  );
};

export default PostTocContainer;