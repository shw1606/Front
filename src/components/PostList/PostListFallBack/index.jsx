import React from "react";

// component
import FallBackItem from "./FallBackItem";

// style
import * as S from "./style";

const PostListFallBack = () => {
  return (
    <>
      <S.PostListLayout>
          {Array(8)
            .fill()
            .map(() => (
              <FallBackItem
                key={Math.floor(Math.random() * 1000) + "Fallback"}
              />
            ))}
      </S.PostListLayout>
    </>
  );
};

export default PostListFallBack;
