import React from "react";
import { useSelector } from "react-redux";

// style
import * as S from "./style";

const ErrorMessage = () => {
  const errorMessage = useSelector((state) => state.register.errorMessage);

  return (
    <>
      <S.Message>{errorMessage}</S.Message>
    </>
  );
};

export default ErrorMessage;
