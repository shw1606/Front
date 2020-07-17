import immer from "immer";

const initialState = {};

const PostReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      default: {
        break;
      }
    }
  });
};

export default PostReducer;
