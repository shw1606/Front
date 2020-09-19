import React, { useCallback, useState } from "react";
import { FaGlobeAsia, FaLock } from "react-icons/fa";

// style
import * as S from "./style";

const VisibilitySetting = () => {
  const [setting, setSetting] = useState(true);

  const clickButton = useCallback(() => {
    setSetting((prev) => !prev);
  }, []);

  return (
    <>
      <S.Layout>
        <S.Title>공개 설정</S.Title>
        <div className="content">
          <S.Button onClick={clickButton} setting={setting}>
            <FaGlobeAsia />
            <div>전체 공개</div>
          </S.Button>
          <S.Button onClick={clickButton} setting={!setting}>
            <FaLock />
            <div>비공개</div>
          </S.Button>
        </div>
      </S.Layout>
    </>
  );
};

export default VisibilitySetting;
