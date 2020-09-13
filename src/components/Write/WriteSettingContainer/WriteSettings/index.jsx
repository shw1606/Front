import React, { useCallback, useState } from "react";

// compontns
import VisibilitySetting from "../VisibilitySetting";
import UrlSetting from "../UrlSetting";
import SeriesSetting from "../SeriesSetting";
import FinalSubmitButton from "../FinalSubmitButton";
import SeriesPopUp from "../SeriesPopUp";

// style
import * as S from "./style";

const WriteSettings = () => {
  const [seriesPopup, setSeriesPopup] = useState(false); // seires 팝업 전환여부
  const [clickedList, setClickedList] = useState("");

  const clickSeiresPopUpBtn = useCallback(() => {
    setSeriesPopup((prev) => !prev);
  }, []);

  const clickSeriesList = useCallback((value) => {
    setClickedList(value);
  }, []);

  return (
    <>
      <S.Layout>
        {seriesPopup ? (
          <SeriesPopUp listClick={clickSeriesList} clickedList={clickedList} />
        ) : (
          <div>
            <VisibilitySetting />
            <UrlSetting />
            <SeriesSetting
              clickedList={clickedList}
              clickList={clickSeriesList}
              clickSeiresPopUpBtn={clickSeiresPopUpBtn}
            />
          </div>
        )}
        <FinalSubmitButton
          clickSeiresPopUpBtn={clickSeiresPopUpBtn}
          clickList={clickSeriesList}
          seriesPopup={seriesPopup}
          clickedList={clickedList}
        />
      </S.Layout>
    </>
  );
};

export default WriteSettings;
