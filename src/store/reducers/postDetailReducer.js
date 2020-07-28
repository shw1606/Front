import immer from "immer";

// actions
import {
  LOAD_POST_DETAIL_REQUEST,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
} from "../actions/postDetailAction";

const initialState = {
  postInfo: {},
};

const PostReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_DETAIL_REQUEST: {
        break;
      }
      case LOAD_POST_DETAIL_SUCCESS: {
        draft.postInfo = action.data;
        break;
      }
      case LOAD_POST_DETAIL_FAILURE: {
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default PostReducer;
