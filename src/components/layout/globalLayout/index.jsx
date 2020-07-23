import React from "react";

// header component
import Header from "components/Header";

// global layout style
import GlobalLayoutStyle from "./style";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <GlobalLayoutStyle>
        <Header />
        {children}
      </GlobalLayoutStyle>
    </>
  );
};

export default GlobalLayout;
