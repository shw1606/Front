import React from "react";

// header component
import Header from "components/header";

// global layout style
import GlobalLayoutStyle from "styles/layout/globalLayout";

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
