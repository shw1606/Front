import React, { memo } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/all";
import * as S from './style';

const ReadingListCard = ({ author, title, thumbnail, content, avatar, heart }) => (
  <S.PostCardStyle>
    <S.PostImage to={`/@${author}/${title}`}>
      <div>
        <img src={thumbnail} alt={`${title} thumbnail`} />
      </div>
    </S.PostImage>
    <S.MainInfo>
      <S.Payload to={`/@${author}/${title}`}>
        <h4>{title}</h4>
        <div>
          <p>{content}</p>
        </div>
      </S.Payload>
      <S.Date>
        <span>게시일자</span>
        <span className="separator" />
        <span>조회수</span>
        <span>수정일자</span>
      </S.Date>
    </S.MainInfo>
    <S.SubInfo>
      <Link to={`/@${author}/${title}`}>
        <img src={avatar} alt={`${author} avatar`} />
        <span>
          by
          {' '}
          <b>{author}</b>
        </span>
      </Link>
      <div className="likes">
        <BsFillHeartFill />
        {heart}
      </div>
    </S.SubInfo>
  </S.PostCardStyle>
);

ReadingListCard.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string,
  content: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  heart: PropTypes.number.isRequired
};

ReadingListCard.defaultProps = {
  thumbnail: null
};

export default memo(ReadingListCard);
