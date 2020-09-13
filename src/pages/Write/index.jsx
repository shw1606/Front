import React from "react";
import { useSelector } from "react-redux";

// components
import MarkDownContainer from "components/Write/MarkDownContainer";
import LeftBottomContainer from "components/Write/LeftBottomContainer";
import MarkDownPreviewContainer from "components/Write/MarkDownPreviewContainer";
import WriteSettingContainer from "components/Write/WriteSettingContainer";

// style
import * as S from "./style";

const Write = () => {
  const printWriteSetting = useSelector(
    (store) => store.write.printWriteSetting
  );
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
      {printWriteSetting && <WriteSettingContainer />}
    </>
  );
};

export default Write;
