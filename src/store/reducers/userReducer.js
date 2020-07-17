import immer from "immer";

const initialState = {};

const UserReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      default: {
        break;
      }
    }
  });
};

export default UserReducer;
