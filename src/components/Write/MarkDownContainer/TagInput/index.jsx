import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { addTag, removeTag, removeClickedTag } from "store/actions/writeAction";

// style
import * as S from "./style";

const TagInput = () => {
  const dispatch = useDispatch();
  const [tagInput, setTagInput] = useState("");
  const [focus, setFocus] = useState(false);
  const tagList = useSelector((store) => store.write.tagList);

  // tag 텍스트 변경
  const changeTagInput = useCallback((event) => {
    setTagInput(event.target.value);
  }, []);

  // 특정 태그 클릭
  const clickTagItem = useCallback(
    (clickedTag) => {
      dispatch(removeClickedTag(clickedTag));
    },
    [tagList]
  );

  // 엔터, 쉼표 자판키 감지
  const perceiveKeyDown = useCallback(
    (event) => {
      const keys = [",", "Enter"];
      const { key, target } = event;
      if (key === "Backspace") {
        if (tagList.length === 0) return;
        dispatch(removeTag());
        return;
      }
      if (keys.includes(key)) {
        const text = target.value;
        if (text.trim() === "") return;
        if (tagList.includes(text.trim())) {
          setTagInput("");
          return;
        }
        dispatch(addTag(text.trim()));
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
          <S.Tag key={tag} onClick={() => clickTagItem(tag)}>
            {tag}
          </S.Tag>
        ))}
        <S.TagInput
          className="tagInput"
          placeholder="태그를 입력하세요"
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
