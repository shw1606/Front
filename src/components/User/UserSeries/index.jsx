import React from 'react';
import * as S from './style';
import dummy from 'saga/UserSeriesDummy.json'
import UserSeriesListItem from "./UserSeriesListItem";

const UserSeries = () => {
  const seriesList = dummy.data;

  return (
    <>
      {seriesList
        ? <S.UserSeriesGridLayout>
          {seriesList.map(series =>
            <UserSeriesListItem series={series} key={series.id}/>)}
          </S.UserSeriesGridLayout>
        : <S.SeriesNotFound> 시리즈가 없습니다. </S.SeriesNotFound>
      }
    </>
  );
};

export default UserSeries;