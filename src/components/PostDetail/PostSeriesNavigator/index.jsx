import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

// style
import * as S from "./style";

const PostSeriesNavigator = () => {
  return (
    <>
      <S.Container>
        <S.Navigator>
          <Link to="/">
            <S.ButtonWrapper marginRight="1rem">
              <BsArrowLeft />
            </S.ButtonWrapper>
            <S.Title alignItems="flex-start">
              <div className="description">이전 포스트</div>
              <h3>REST란 ❓</h3>
            </S.Title>
          </Link>
        </S.Navigator>
        {/*  */}
        <S.Navigator flexDirection="row-reverse" marginLeft="3rem">
          <Link to="/">
            <S.ButtonWrapper marginLeft="1rem">
              <BsArrowRight />
            </S.ButtonWrapper>
            <S.Title alignItems="flex-end" textAlign="right">
              <div className="description">이전 포스트</div>
              <h3>REST란 ❓</h3>
            </S.Title>
          </Link>
        </S.Navigator>
      </S.Container>
    </>
  );
};

export default PostSeriesNavigator;
