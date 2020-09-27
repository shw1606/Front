import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import SeriesPost from "../SeriesPost";
import { RiArrowUpSLine } from 'react-icons/all'
// style
import * as S from './style';

import series from 'saga/seriesListDummy.json';

const SeriesList = () => {
  const [order, setOrder] = useState(true);
  const posts = series.data.seriesPosts;

  const handleClick = useCallback(() => {
    setOrder(!order);
  },[order]);

  return (
    <>
      <S.AlignButton onClick={handleClick}>
        <RiArrowUpSLine/>
        <span> {order === true ? '오름차순' : '내림차순'} </span>
      </S.AlignButton>
      {posts.map(post =>
        <SeriesPost key={post.post_id}
                    index={post.index}
                    title={post.title}
                    description={post.description}
                    thumbnail={post.thumbnail}
                    updatedAt={post.updated_at}/>
      )}
    </>
  );
};

SeriesList.propTypes  = {};

export default SeriesList;