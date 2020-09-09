import React from "react";

// components
import MarkDownContainer from "components/Write/MarkDownContainer";
import LeftBottomContainer from "components/Write/LeftBottomContainer";
import MarkDownPreviewContainer from "components/Write/MarkDownPreviewContainer";

// style
import * as S from "./style";

const Write = () => {
  return (
    <>
      <S.Layout>
        <div className="container">
          <section className="left">
            <MarkDownContainer />
            <LeftBottomContainer />
          </section>
          <section className="right">
            <MarkDownPreviewContainer />
          </section>
        </div>
      </S.Layout>
    </>
  );
};

export default Write;
