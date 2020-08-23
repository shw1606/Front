import React, { Fragment, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as S from './style';

// component
import UserSeriesFallBack from "../UserSeriesFallBack";

//action
import { LOAD_USER_SERIES_LIST_REQUEST } from "store/actions/userAction";

//custom hooks
import { useInfiniteScroll } from "hooks";

//lazy component
const UserSeriesListItem = lazy(() => import('./UserSeriesListItem'));

const UserSeries = ({ username }) => {
  const dispatch = useDispatch();
  const seriesList = useSelector(state => state.userReducer.seriesList);

  const showSeriesFallback = useSelector(state => state.userReducer.showSeriesFallback);
  const hasMoreSeries = useSelector(state => state.userReducer.hasMoreSeries);

  useEffect(() =>{
    dispatch({ type: LOAD_USER_SERIES_LIST_REQUEST })
  }, []);

  useInfiniteScroll(seriesList, hasMoreSeries, 0.75, LOAD_USER_SERIES_LIST_REQUEST);

  return (
    <>
      <Suspense fallback="">
        {seriesList
          ? <S.UserSeriesLayout>
            {seriesList.map(series =>
              <UserSeriesListItem series={series} username={username} key={series.id}/>)}
            </S.UserSeriesLayout>
          : <S.SeriesNotFound> 시리즈가 없습니다. </S.SeriesNotFound>
        }
      </Suspense>
      {showSeriesFallback || <UserSeriesFallBack/>}
    </>
  );
};

export default UserSeries;