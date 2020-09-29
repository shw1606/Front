/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// component
import { changeTitle } from "store/actions/writeAction";
import TagInput from "../TagInput";

// action

// style
import * as S from "./style";

const MainHeader = () => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.write.title);
  const [_, setTitle] = useState("");

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
        />
        <TagInput />
      </S.Layout>
    </>
  );
};

export default MainHeader;
