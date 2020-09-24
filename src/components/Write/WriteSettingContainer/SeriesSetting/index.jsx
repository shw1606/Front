import React from "react";
import { BsFilePlus, BsFillGearFill } from "react-icons/bs";

// style
import * as S from "./style";

const SeriesSetting = ({ clickedList, clickList, clickSeiresPopUpBtn }) => (
  <>
    <S.Layout>
      <S.Title>시리즈 설정</S.Title>
      {clickedList ? (
        <div>
          <S.SelectContainer>
            <S.SelectWrapper>
              <S.SelectItem>{clickedList}</S.SelectItem>
            </S.SelectWrapper>
            <S.SelectButton onClick={clickSeiresPopUpBtn}>
              <BsFillGearFill />
            </S.SelectButton>
          </S.SelectContainer>
          <S.CancelButtonWrapper>
            <S.CancelButton onClick={() => clickList("")}>
              시리즈에서 제거
            </S.CancelButton>
          </S.CancelButtonWrapper>
        </div>
      ) : (
        <S.SeriesAddButton onClick={clickSeiresPopUpBtn}>
          <BsFilePlus />
          <div>시리즈에 공개하기</div>
        </S.SeriesAddButton>
      )}
    </S.Layout>
  </>
);

export default SeriesSetting;
