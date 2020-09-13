import React, { useCallback, useEffect, useState } from "react";

// style
import * as S from "./style";

const AddLink = ({ left, top, onConfirm, onCancel, stickToRight }) => {
  const [link, setLink] = useState("");

  // link text 변경
  const changeLinkText = useCallback((event) => {
    setLink(event.target.value);
  }, []);

  // link 전송
  const submitLink = useCallback(
    (event) => {
      event.preventDefault();
      onConfirm(link);
    },
    [link, onConfirm]
  );

  // 컴포넌트 외 다른 화면 클릭
  const clickToOutside = useCallback(
    (event) => {
      let element = event.target;
      if (element.nodeName === "SECTION") {
        onCancel();
        return;
      }
      while (!element.classList.contains("link-layout")) {
        element = element.parentNode;
        if (element.nodeName === "SECTION") {
          element = null;
          onCancel();
          return;
        }
      }
    },
    [onCancel]
  );

  useEffect(() => {
    window.addEventListener("click", clickToOutside);
    return () => {
      window.removeEventListener("click", clickToOutside);
    };
  }, [clickToOutside]);

  return (
    <>
      <S.Layout
        className="link-layout"
        left={stickToRight ? "initial" : `${left}px`}
        top={top}
        right={stickToRight ? "3rem" : "initial"}
      >
        <S.TitleWrapper>링크 등록</S.TitleWrapper>
        <S.Form onSubmit={submitLink}>
          <S.Input
            placeholder="URL 을 입력하세요"
            onChange={changeLinkText}
            value={link}
          />
          <S.Button type="submit">확인</S.Button>
        </S.Form>
      </S.Layout>
    </>
  );
};

export default AddLink;
