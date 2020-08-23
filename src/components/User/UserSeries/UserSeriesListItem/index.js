import React from 'react';
import * as S from './style';
import {Link} from "react-router-dom";

const UserSeriesListItem = ({ series, username }) => {
  const { name, thumbnail, url_slug, posts, updated_at } = series;
  const link = `/${username}/${url_slug}`;

  return (
    <S.SeriesCardWrapper>
      <S.SeriesThumbnail>
        <Link to={link}>
          <img src={thumbnail} alt={`${name}_thumbnail`} />
        </Link>
      </S.SeriesThumbnail>
      <h2> {name} </h2>
      <S.SeriesSubInfo>
        <div> {posts}개의 포스트 </div>
        <div> · </div>
        <S.SeriesUpdatedAt> 마지막 업데이트 {updated_at} </S.SeriesUpdatedAt>
      </S.SeriesSubInfo>
    </S.SeriesCardWrapper>
  );
};

export default UserSeriesListItem;