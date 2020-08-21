import immer from "immer";

import {
  LOAD_USER_PROFILE_REQUEST,
  LOAD_USER_PROFILE_SUCCESS,
  LOAD_USER_PROFILE_FAILURE,
} from "store/actions/userAction";

const initialState = {
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
      default: {
        break;
      }
    }
  });
};

export default UserReducer;
