import React from "react";

// header component
import Header from "components/header";

// global Layout style
import GlobalLayoutStyle from "components/Layout/GlobalLayout/style";

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