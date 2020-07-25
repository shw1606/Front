import immer from "immer";

// action
import {
  POSTS_LOAD_REQUEST,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_FAILURE,
} from "store/actions/postAction";

const initialState = {
  posts: [],
  hasMorePosts: true,
};

const PostReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case POSTS_LOAD_REQUEST: {
        break;
      }
      case POSTS_LOAD_SUCCESS: {
        draft.hasMorePosts = action.data.length === 20;
        draft.posts.push(...action.data);
        break;
      }
      case POSTS_LOAD_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default PostReducer;
