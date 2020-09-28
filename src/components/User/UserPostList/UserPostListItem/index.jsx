import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsFillHeartFill } from "react-icons/all";
import * as S from './style';

const UserPostListItem = ({ username, title, content, thumbnail, updatedAt, heart, tags }) => {
  const link = `/@${username}/${title}`;

  return (
    <S.UserPostCard>
      {thumbnail && (
      <S.PostImageWrapper>
        <Link to={link}>
          <img src={thumbnail} alt={`${title}_thumbnail`} />
        </Link>
      </S.PostImageWrapper>
      )}
      <h2>
        <Link to={link}>
          {title}
        </Link>
      </h2>
      <S.PostContent>
        {content}
      </S.PostContent>
      <S.TagsWrapper>
        {tags && tags.map((tag) => (
          <S.Tag to={`/tags/${tag}`} key={tag.toString()}>
            {tag}
          </S.Tag>
        ))}
      </S.TagsWrapper>
      <S.PostSubInfo>
        <span>
          {updatedAt}
        </span>
        <span>
          <BsFillHeartFill />
          {heart}
        </span>
      </S.PostSubInfo>
    </S.UserPostCard>
  );
};

UserPostListItem.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  updatedAt: PropTypes.string.isRequired,
  heart: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

UserPostListItem.defaultProps = {
  thumbnail: null,
  tags: []
};

export default UserPostListItem;
