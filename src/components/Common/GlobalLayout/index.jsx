import React from "react";

// header component
import Header from "components/Header";
import AlertLayout from "components/Common/AlertLayout";

// global layout style
import GlobalLayoutStyle from "./style";

const GlobalLayout = ({ children }) => {
  return (
    <>
      <GlobalLayoutStyle>
        <Header />
        {children}
        <AlertLayout />
      </GlobalLayoutStyle>
    </>
  );
};

export default GlobalLayout;
