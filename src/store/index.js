import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// reducers
import common from "store/reducers/commonReducer";
import postReducer from "store/reducers/postReducer";
import postDetailReducer from "store/reducers/postDetailReducer";
import userReducer from "store/reducers/userReducer";
import register from "store/reducers/registerReducer";
import modal from "store/reducers/modalReducer";
import readingList from "store/reducers/readingListReducer";
import write from "store/reducers/writeReducer";
import save from "store/reducers/saveReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    common,
    postReducer,
    postDetailReducer,
    userReducer,
    register,
    modal,
    readingList,
    write,
    save,
  });

export default createRootReducer;

// export default combineReducers({
//   common,
//   postReducer,
//   postDetailReducer,
//   userReducer,
//   register,
//   modal,
//   readingList,
//   write,
//   save,
// });
