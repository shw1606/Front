import { all, fork } from "redux-saga/effects";

// saga
import loadUserProfile from "./loadUserProfile";
import loadUserPosts from "./loadUserPosts";
import loadUserSeriesList from "./loadUserSeriesList";
import loadUserIntroduction from "./loadUserIntroduction";
import loadUserTags from "./loadUserTags";

export default function* () {
  yield all([
    fork(loadUserProfile),
    fork(loadUserPosts),
    fork(loadUserSeriesList),
    fork(loadUserIntroduction),
    fork(loadUserTags)
  ]);
}
