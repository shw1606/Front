import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// style
import * as S from './style';

const SeriesPost = ({ username, index, title, description, updatedAt, thumbnail }) => {
  const url = `/@${username}/${title}`;
  return (
    <S.SeriesPostLayout>
      <S.SeriesHeading>
        <span> {index}. </span>
        <Link to={url}> {title} </Link>
      </S.SeriesHeading>
      <S.SeriesContent>
        <S.PostImageWrapper>
          <Link to={url}>
            <img src={thumbnail} alt={`${title}_thumbnail`} />
          </Link>
        </S.PostImageWrapper>
        <S.SeriesDetail>
          <p> {description} </p>
          <div> {updatedAt} </div>
        </S.SeriesDetail>
      </S.SeriesContent>
    </S.SeriesPostLayout>
  );
};

SeriesPost.propTypes  = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired
};

export default SeriesPost;