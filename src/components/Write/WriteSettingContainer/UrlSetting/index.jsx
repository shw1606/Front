import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

// hooks
import { useInput } from "hooks";

// action
import { changePostUrl } from "store/actions/writeAction";

// style
import * as S from "./style";

const UrlSetting = () => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.write.title);
  const [text, changeText, setText] = useInput("");

  // url input debounce 동작
  const debounced = useRef(
    debounce((newText) => dispatch(changePostUrl(newText)), 300)
  );

  // debounce ref 실행
  useEffect(() => {
    debounced.current(text);
    return () => {
      debounced.current(text);
    };
  }, [text]);

  // title data 가져오기
  useEffect(() => {
    setText(title);
  }, [title]);

  return (
    <>
      <S.Layout>
        <S.Title>URL 설정</S.Title>
        <S.InputWrapper>
          <div className="user-name">/@charmingcheol/</div>
          <S.Input value={text} onChange={changeText} />
        </S.InputWrapper>
      </S.Layout>
    </>
  );
};

export default UrlSetting;
