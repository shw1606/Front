import immer from "immer";

//유저 프로필 정보 load action
import {
  LOAD_USER_PROFILE_REQUEST,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAILURE,
} from "store/actions/userAction";
//유저가 작성한 글 목록 load action
import {
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE
} from "store/actions/userAction";

const initialState = {
  posts: [],
  hasMorePosts: [],
  showPostFallback: true,
  userProfile: null
};

const UserReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case LOAD_USER_PROFILE_REQUEST: {
        break;
      }
      case LOAD_USER_PROFILE_SUCCESS: {
        draft.userProfile = action.data;
        break;
      }
      case LOAD_USER_PROFILE_FAILURE: {
        break;
      }
      case LOAD_USER_POSTS_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case LOAD_USER_POSTS_SUCCESS: {
        draft.hasMorePosts = action.data.length === 20;
        draft.posts.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case LOAD_USER_POSTS_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default UserReducer;
