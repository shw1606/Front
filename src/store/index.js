import { combineReducers } from "redux";

// reducers
import postReducer from "store/reducers/postReducer";
import userReducer from "store/reducers/userReducer";

export default combineReducers({ postReducer, userReducer });
