import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// components
import Input from "components/Register/Input";
import ErrorMessage from "components/Register/ErrorMessage";

// action
import { submitRegisterInfo } from "store/actions/registerAction";

// style
import * as S from "./style";

// data
import InputData from "./data";

const Form = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.register.id);
  const introduce = useSelector((state) => state.register.introduce);

  // 다음 버튼 클릭
  const submitInfo = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(submitRegisterInfo({ id, introduce }));
    },
    [dispatch, id, introduce]
  );

  return (
    <>
      <S.Form onSubmit={submitInfo}>
        {InputData.map((value) => <Input key={value.label} value={value} />)}
        <ErrorMessage />
        <S.FormButtons>
          <button className="cancel">
            <Link to="/">취소</Link>
          </button>
          <button className="submit" type="submit">
            다음
          </button>
        </S.FormButtons>
      </S.Form>
    </>
  );
};

export default Form;
