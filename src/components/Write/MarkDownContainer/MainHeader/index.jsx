import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

// component
import TagInput from "../TagInput";

// action
import { changeTitle } from "store/actions/writeAction";

// style
import * as S from "./style";

const MainHeader = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  // title 값 변경
  const changeTitleInput = useCallback(
    (event) => {
      setTitle(event.target.value);
      dispatch(changeTitle(event.target.value));
    },
    [dispatch]
  );

  return (
    <>
      <S.Layout>
        <S.Textarea
          placeholder="제목을 입력하세요"
          onChange={changeTitleInput}
          value={title}
        ></S.Textarea>
        <TagInput />
      </S.Layout>
    </>
  );
};

export default MainHeader;
