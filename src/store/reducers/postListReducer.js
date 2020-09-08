import immer from "immer";

//좋아한 포스트 load action
import {
  LOAD_LIKED_POSTS_REQUEST,
  LOAD_LIKED_POSTS_SUCCESS,
  LOAD_LIKED_POSTS_FAILURE,
} from "store/actions/postListAction";

const initialState = {
  likedPosts: [],
  hasMoreLikedPosts: true,
  showLikedPostsFallback: false
};

const postListReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
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
      default: {
        break;
      }
    }
  });
};

export default postListReducer;
