import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as S from './style';

const UserSeriesListItem = ({ name, thumbnail, urlSlug, posts, updatedAt, username }) => {
  const link = `/${username}/series/${urlSlug}`;

  return (
    <S.SeriesCardWrapper>
      <S.SeriesThumbnail>
        <Link to={link}>
          <img src={thumbnail} alt={`${name}_thumbnail`} />
        </Link>
      </S.SeriesThumbnail>
      <h2>
        {' '}
        {name}
        {' '}
      </h2>
      <S.SeriesSubInfo>
        <div>
          {' '}
          {posts}
          개의 포스트
          {' '}
        </div>
        <div> · </div>
        <S.SeriesUpdatedAt>
          {' '}
          마지막 업데이트
          {updatedAt}
        </S.SeriesUpdatedAt>
      </S.SeriesSubInfo>
    </S.SeriesCardWrapper>
  );
};

UserSeriesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  urlSlug: PropTypes.string.isRequired,
  posts: PropTypes.number.isRequired,
  updatedAt: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

UserSeriesListItem.defaultProps = {
  thumbnail: "defaultImgSrc"
};
export default UserSeriesListItem;
