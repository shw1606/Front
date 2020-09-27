import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { RiArrowUpSLine } from 'react-icons/all';
import SeriesPost from "../SeriesPost";

// style
import * as S from './style';

const SeriesList = ({ posts }) => {
  const [order, setOrder] = useState(true);

  const handleClick = useCallback(() => {
    setOrder(!order);
  }, [order]);

  return (
    <>
      <S.AlignButton onClick={handleClick}>
        <RiArrowUpSLine />
        <span>
          {order === true ? '오름차순' : '내림차순'}
        </span>
      </S.AlignButton>
      {posts && posts.map((post) => (
        <SeriesPost
          key={post.post_id}
          index={post.index}
          title={post.title}
          description={post.description}
          thumbnail={post.thumbnail}
          updatedAt={post.updated_at}
        />
      ))}
    </>
  );
};

SeriesList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    post_id: PropTypes.number,
    index: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    updated_at: PropTypes.string
  }))
};

SeriesList.defaultProps = {
  posts: null
};

export default SeriesList;
