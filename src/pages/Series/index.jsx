import React from 'react';
import { useParams } from "react-router-dom";

//style
import * as S from './style';

//components
import SeriesHeader from "components/Series/SeriesHeader";
import SeriesList from "../../components/Series/SeriesList";

const Series = () => {
  const { username, title } = useParams();

  return (
   <S.SeriesLayout>
     <SeriesHeader name={"벨로그에 그리드뷰 되살리기"}/>
     <SeriesList/>
   </S.SeriesLayout>
  );
};

export default Series;