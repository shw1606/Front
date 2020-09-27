import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { RiArrowUpSLine } from 'react-icons/all';
import SeriesPost from "../SeriesPost";

// style
import * as S from './style';

const SeriesList = ({ username, posts }) => {
  const [sort, toggleSort] = useState(true);
  const [sortedPosts, setSortedPosts] = useState(posts);

  const handleClick = useCallback(() => {
    toggleSort(!sort);
    setSortedPosts([...sortedPosts].reverse());
  }, [sort, sortedPosts]);

  return (
    <>
      <S.SortButton onClick={handleClick}>
        <RiArrowUpSLine />
        <span>
          {sort === true ? '오름차순' : '내림차순'}
        </span>
      </S.SortButton>
      {sortedPosts && sortedPosts.map((post) => (
        <SeriesPost
          key={post.post_id}
          index={post.index}
          title={post.title}
          description={post.description}
          thumbnail={post.thumbnail}
          updatedAt={post.updated_at}
          username={username}
        />
      ))}
    </>
  );
};

SeriesList.propTypes = {
  username: PropTypes.string.isRequired,
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
