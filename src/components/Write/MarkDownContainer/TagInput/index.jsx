import React, { useCallback, useState } from "react";

// style
import * as S from "./style";

const TagInput = () => {
  const [tagInput, setTagInput] = useState("");
  const [tagList, setTagList] = useState([]);
  const [focus, setFocus] = useState(false);

  const removeClickedTag = useCallback(
    (clickedTag) => {
      const nextTags = tagList.filter((tag) => tag !== clickedTag);
      setTagList(nextTags);
    },
    [tagList]
  );

  // tag 텍스트 변경
  const changeTagInput = useCallback((event) => {
    setTagInput(event.target.value);
  }, []);

  // 엔터, 쉼표 자판키 감지
  const perceiveKeyDown = useCallback(
    (event) => {
      const keys = [",", "Enter"];
      if (event.key === "Backspace") {
        setTagList((prev) => prev.slice(0, prev.length - 1));
        return;
      }
      if (keys.includes(event.key)) {
        const text = event.target.value;
        event.preventDefault();
        if (text === "") return;
        if (tagList.includes(text.trim())) {
          setTagInput("");
          return;
        }
        setTagList((prev) => [...prev, text.trim()]);
        setTagInput("");
      }
    },
    [tagList]
  );

  // input에 포커스가 있는 경우
  const focusInput = useCallback(() => {
    setFocus(true);
  }, []);

  // input에 포커스를 잃은 경우
  const blurInput = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <>
      <S.Layout>
        {tagList.map((tag) => (
          <S.Tag key={tag} onClick={() => removeClickedTag(tag)}>
            {tag}
          </S.Tag>
        ))}
        <S.TagInput
          className="tagInput"
          placeholder="태그를 입력하세요"
          tabIndex="2"
          onChange={changeTagInput}
          onKeyDown={perceiveKeyDown}
          onFocus={focusInput}
          onBlur={blurInput}
          value={tagInput}
        />
        <S.ToastContainer>
          <S.Toast visible={focus}>
            쉼표 혹은 엔터를 입력하여 태그를 등록 할 수 있습니다.
            <br />
            등록된 태그를 클릭하면 삭제됩니다.
          </S.Toast>
        </S.ToastContainer>
      </S.Layout>
    </>
  );
};

export default TagInput;
