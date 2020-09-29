import React, { lazy, Suspense, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

// action
import { LOAD_USER_SERIES_LIST_REQUEST } from "store/actions/userAction";

// custom hooks
import { useInfiniteScroll } from "hooks";

import * as S from "./style";

// component
import UserSeriesFallBack from "../UserSeriesFallBack";

// lazy component
const UserSeriesListItem = lazy(() => import("./UserSeriesListItem"));

const UserSeries = ({ username }) => {
  const dispatch = useDispatch();
  const seriesList = useSelector((state) => state.userReducer.seriesList);

  const showSeriesFallback = useSelector(
    (state) => state.userReducer.showSeriesFallback
  );
  const hasMoreSeries = useSelector((state) => state.userReducer.hasMoreSeries);

  useEffect(() => {
    dispatch({ type: LOAD_USER_SERIES_LIST_REQUEST });
  }, [dispatch, username]);

  useInfiniteScroll(
    seriesList,
    hasMoreSeries,
    0.75,
    LOAD_USER_SERIES_LIST_REQUEST
  );

  return (
    <>
      <Suspense fallback="">
        {seriesList ? (
          <S.UserSeriesLayout>
            {seriesList.map((series) => (
              <UserSeriesListItem
                username={username}
                key={series.id}
                name={series.name}
                thumbnail={series.thumbnail}
                urlSlug={series.url_slug}
                posts={series.posts}
                updatedAt={series.updated_at}
              />
            ))}
          </S.UserSeriesLayout>
        ) : (
          <S.SeriesNotFound> 시리즈가 없습니다. </S.SeriesNotFound>
        )}
      </Suspense>
      {showSeriesFallback || <UserSeriesFallBack />}
    </>
  );
};

UserSeries.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserSeries;
