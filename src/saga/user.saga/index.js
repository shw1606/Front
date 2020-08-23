import { all, fork } from "redux-saga/effects";

// saga
import loadUserProfile from "./loadUserProfile";
import loadUserPosts from "./loadUserPosts";

export default function* () {
  yield all([
    fork(loadUserProfile),
    fork(loadUserPosts)
  ]);
}
