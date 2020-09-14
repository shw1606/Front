import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OutsideClickHandler from "react-outside-click-handler";

// component
import SeriesUrlSlug from "../SeriesUrlSlug";

// action
import { submitSeriesInput, loadSeriesList } from "store/actions/writeAction";
import { printAlert } from "store/actions/commonAction";

// style
import * as S from "./style";

const SeiresPopUp = ({ listClick, clickedList }) => {
  const dispatch = useDispatch();
  const seriesList = useSelector((store) => store.write.seriesList);
  const [seriesText, setSeriesText] = useState("");
  const [focusUrlSlug, setFocusUrlSlug] = useState(false);

  // 시리즈 input 제출
  const sumbmitSeries = useCallback(
    (event) => {
      event.preventDefault();
      if (seriesList.includes(seriesText)) {
        dispatch(printAlert("series"));
        return;
      }
      dispatch(submitSeriesInput(seriesText));
      setSeriesText("");
    },
    [dispatch, seriesList, seriesText]
  );

  // 시리즈 텍스트 변경
  const changeSeriesText = useCallback((event) => {
    setSeriesText(event.target.value);
  }, []);

  // 최초에 시리즈 리스트 불러오기
  useEffect(() => {
    dispatch(loadSeriesList(1));
  }, [dispatch]);

  return (
    <>
      <S.Layout>
        <S.Title>시리즈 설정</S.Title>
        <S.SeriesPopupContainer>
          <OutsideClickHandler onOutsideClick={() => setFocusUrlSlug(false)}>
            <S.SeriesForm onSubmit={sumbmitSeries}>
              <S.SeriesInput
                value={seriesText}
                onChange={changeSeriesText}
                onFocus={() => setFocusUrlSlug(true)}
                placeholder="새로운 시리즈 이름을 입력하세요"
              />
              {focusUrlSlug && (
                <SeriesUrlSlug
                  text={seriesText}
                  hide={() => setFocusUrlSlug(false)}
                />
              )}
            </S.SeriesForm>
          </OutsideClickHandler>
          <S.SeriesList>
            {seriesList.map((value) => {
              return (
                <S.SeriesItem
                  key={value}
                  onClick={() => listClick(value)}
                  focus={clickedList === value}
                >
                  {value}
                </S.SeriesItem>
              );
            })}
          </S.SeriesList>
        </S.SeriesPopupContainer>
      </S.Layout>
    </>
  );
};

export default SeiresPopUp;
