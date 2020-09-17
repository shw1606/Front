import immer from "immer";

// 좋아한 포스트 load action
import {
  LOAD_LIKED_POSTS_REQUEST,
  LOAD_LIKED_POSTS_SUCCESS,
  LOAD_LIKED_POSTS_FAILURE,
} from "store/actions/readingListAction";
// 최근 읽은 포스트 load action
import {
  LOAD_READ_POSTS_REQUEST,
  LOAD_READ_POSTS_SUCCESS,
  LOAD_READ_POSTS_FAILURE
} from "store/actions/readingListAction";

const initialState = {
  likedPosts: [],
  hasMoreLikedPosts: true,
  showLikedPostsFallback: false,
  readPosts: [],
  hasMoreReadPosts: true,
  showReadPostsFallback: false
};

const readingListReducer = (state = initialState, action) => immer(state, (draft) => {
  switch (action.type) {
    case LOAD_LIKED_POSTS_REQUEST: {
      draft.showLikedPostsFallback = false;
      break;
    }
    case LOAD_LIKED_POSTS_SUCCESS: {
      draft.hasMoreLikedPosts = action.data.length === 20;
      draft.likedPosts.push(...action.data);
      draft.showLikedPostsFallback = true;
      break;
    }
    case LOAD_LIKED_POSTS_FAILURE: {
      draft.showLikedPostsFallback = false;
      break;
    }
    case LOAD_READ_POSTS_REQUEST: {
      draft.showReadPostsFallback = false;
      break;
    }
    case LOAD_READ_POSTS_SUCCESS: {
      draft.hasMoreReadPosts = action.data.length === 20;
      draft.readPosts.push(...action.data);
      draft.showReadPostsFallback = true;
      break;
    }
    case LOAD_READ_POSTS_FAILURE: {
      draft.showReadPostsFallback = false;
      break;
    }
    default: {
      break;
    }
  }
});

export default readingListReducer;
