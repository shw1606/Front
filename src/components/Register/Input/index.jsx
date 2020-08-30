import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

// style
import * as S from "./style";

const Input = ({ value: { label, placeHolder, action } }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  // 인풋 텍스트 값 변경
  const changeInputText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  // debounce
  const debounced = useRef(
    debounce((newText) => dispatch(action(newText)), 300)
  );

  // 인풋 텍스트 값을 리덕스에 전달
  useEffect(() => {
    if (!text) return;
    function deliverToReducer(text) {
      debounced.current(text);
    }
    deliverToReducer(text);
    return () => deliverToReducer(text);
  }, [text]);

  return (
    <>
      <S.Layout>
        <S.Label>{label}</S.Label>
        <S.Input
          placeholder={placeHolder}
          onChange={changeInputText}
          value={text}
        />
      </S.Layout>
    </>
  );
};

export default memo(Input);
