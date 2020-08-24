import React, {useEffect} from 'react';
import * as S from './style';
import { useDispatch, useSelector} from "react-redux";
import { LOAD_USER_TAGS_REQUEST} from "store/actions/userAction";

const UserTags = ({ id }) => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.userReducer.tags);

  useEffect(() => {
    dispatch({
      type: LOAD_USER_TAGS_REQUEST,
      id
    })
  }, [id]);

  return (
    <>
      {tags &&
      <S.UserTagsWrapper>
        <S.TagsAll>
          전체보기
        </S.TagsAll>
        {tags.map(tag =>
          <S.Tag key={tag.tag_id}>
            {tag.name}
          </S.Tag>
        )}
      </S.UserTagsWrapper>
      }
    </>
  );
};

export default UserTags;