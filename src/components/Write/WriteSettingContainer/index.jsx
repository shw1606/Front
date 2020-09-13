import React from "react";

// components
import PostPreview from "./PostPreview";
import WriteSettings from "./WriteSettings";

// style
import * as S from "./style";

const WriteSettingContainer = () => {
  return (
    <>
      <S.Layout>
        <S.SettingContainer>
          <PostPreview />
          <S.Divider />
          <WriteSettings />
        </S.SettingContainer>
      </S.Layout>
    </>
  );
};

export default WriteSettingContainer;
