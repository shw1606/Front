import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_PROFILE_REQUEST } from "store/actions/userAction";
import * as S from './style';

const UserProfile = ({ id }) => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.userReducer.userProfile);

  useEffect(() => {
    console.log("dispatch");
    dispatch({
      type: LOAD_USER_PROFILE_REQUEST,
      id
    });
  }, [id]);

  return (
    <>
      {userProfile &&
          <S.UserInfoWrapper>
            <img src={userProfile.thumbnail} alt="user_thumbnail"/>
            <S.TextWrapper>
              <h1> {userProfile.velog_name} </h1>
              <div> {userProfile.short_bio} </div>
            </S.TextWrapper>
          </S.UserInfoWrapper>
      }
    </>
  );
};

export default UserProfile;