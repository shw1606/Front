import React from "react";

// header component
import Header from "components/Header";

// global Layout style
import GlobalLayoutStyle from "styles/Layout/GlobalLayout";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <GlobalLayoutStyle>
        <Header />
        <div>{children}</div>
      </GlobalLayoutStyle>
    </>
  );
};

export default GlobalLayout;
