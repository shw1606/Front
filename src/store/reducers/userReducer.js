import immer from "immer";

// 유저 프로필 정보 load action
import {
  LOAD_USER_PROFILE_REQUEST,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAILURE,
} from "store/actions/userAction";
// 유저가 작성한 글 목록 load action
import {
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE
} from "store/actions/userAction";
// 유저가 작성한 시리즈 목록 load action
import {
  LOAD_USER_SERIES_LIST_REQUEST,
  LOAD_USER_SERIES_LIST_SUCCESS,
  LOAD_USER_SERIES_LIST_FAILURE
} from "store/actions/userAction";
// 유저의 소개 load action
import {
  LOAD_USER_INTRODUCTION_REQUEST,
  LOAD_USER_INTRODUCTION_SUCCESS,
  LOAD_USER_INTRODUCTION_FAILURE
} from "store/actions/userAction";
// 유저가 작성한 글 목록에 포함된 태그 load action
import {
  LOAD_USER_TAGS_REQUEST,
  LOAD_USER_TAGS_SUCCESS,
  LOAD_USER_TAGS_FAILURE
} from "store/actions/userAction";

const initialState = {
  posts: [],
  hasMorePosts: true,
  showPostFallback: false,
  seriesList: [],
  hasMoreSeries: true,
  showSeriesFallback: false,
  userProfile: null,
  userInstruction: null,
  tags: []
};

const UserReducer = (state = initialState, action) => immer(state, (draft) => {
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
    case LOAD_USER_SERIES_LIST_REQUEST: {
      draft.showSeriesFallback = false;
      break;
    }
    case LOAD_USER_SERIES_LIST_SUCCESS: {
      draft.hasMoreSeries = action.data.length === 20;
      draft.seriesList.push(...action.data);
      draft.showSeriesFallback = true;
      break;
    }
    case LOAD_USER_SERIES_LIST_FAILURE: {
      draft.showSeriesFallback = false;
      break;
    }
    case LOAD_USER_INTRODUCTION_REQUEST: {
      break;
    }
    case LOAD_USER_INTRODUCTION_SUCCESS: {
      draft.userInstruction = action.data;
      break;
    }
    case LOAD_USER_INTRODUCTION_FAILURE: {
      break;
    }
    case LOAD_USER_TAGS_REQUEST: {
      draft.posts = [];
      break;
    }
    case LOAD_USER_TAGS_SUCCESS: {
      draft.tags = action.data;
      break;
    }
    case LOAD_USER_TAGS_FAILURE: {
      break;
    }
    default: {
      break;
    }
  }
});

export default UserReducer;
