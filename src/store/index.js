import { combineReducers } from "redux";

// reducers
import postReducer from "store/reducers/postReducer";
import postDetailReducer from "store/reducers/postDetailReducer";
import userReducer from "store/reducers/userReducer";

export default combineReducers({ postReducer, postDetailReducer, userReducer });
