import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

// style
import SeriesHeader from "components/Series/SeriesHeader";
import { useDispatch, useSelector } from "react-redux";
import * as S from './style';

// components
import SeriesList from "../../components/Series/SeriesList";
import { LOAD_SERIES_POSTS_REQUEST } from "../../store/actions/seriesAction";

const Series = () => {
  const { username, urlSlug } = useParams();
  const dispatch = useDispatch();
  const seriesInfo = useSelector((state) => state.series.seriesInfo);

  useEffect(() => {
    dispatch({
      type: LOAD_SERIES_POSTS_REQUEST,
    });
  }, [username, urlSlug]);

  return (
    <S.SeriesLayout>
      {seriesInfo && (
      <>
        <SeriesHeader name={seriesInfo.name} />
        <SeriesList username={username} posts={seriesInfo.seriesPosts} />
      </>
      )}
    </S.SeriesLayout>
  );
};

export default Series;
