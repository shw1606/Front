import React from "react";
import FallBackItem from "./FallBackItem";

const UserPostListFallBack = () => {
  return (
      <>
        {Array(8)
          .fill()
          .map(() => (
            <FallBackItem
              key={Math.floor(Math.random() * 1000) + "Fallback"}
            />
          ))}
      </>
  );
};

export default UserPostListFallBack;
