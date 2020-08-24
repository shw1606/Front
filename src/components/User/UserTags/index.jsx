import React, {useEffect} from 'react';
import * as S from './style';
import { useDispatch, useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import { LOAD_USER_TAGS_REQUEST} from "store/actions/userAction";

const UserTags = ({ username }) => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.userReducer.tags);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_TAGS_REQUEST,
    })
  }, [username]);

  return (
    <>
      {tags &&
      <S.UserTagsWrapper>
        <S.TagsAll>
          <Link to={`/profile/@${username}`}>
            전체보기
          </Link>
        </S.TagsAll>
        {tags.map(tag =>
          <S.Tag key={tag.tag_id}>
            <Link to={`/profile/@${username}?tag=${tag.name}`}>
              {tag.name}
            </Link>
          </S.Tag>
        )}
      </S.UserTagsWrapper>
      }
    </>
  );
};

export default UserTags;