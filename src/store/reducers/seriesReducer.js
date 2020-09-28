import immer from "immer";

// 시리즈 포스트 load action
import {
  LOAD_SERIES_POSTS_REQUEST,
  LOAD_SERIES_POSTS_SUCCESS,
  LOAD_SERIES_POSTS_FAILURE,
} from "store/actions/seriesAction";

const initialState = {
  seriesInfo: null
};

const seriesReducer = (state = initialState, action) => immer(state, (draft) => {
  switch (action.type) {
    case LOAD_SERIES_POSTS_REQUEST: {
      break;
    }
    case LOAD_SERIES_POSTS_SUCCESS: {
      draft.seriesInfo = action.data;
      break;
    }
    case LOAD_SERIES_POSTS_FAILURE: {
      break;
    }
    default: {
      break;
    }
  }
});

export default seriesReducer;
