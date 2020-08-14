import { all, fork } from "redux-saga/effects";

// saga
import loadRecentPosts from "./loadRecentPosts";
import loadTrendingPosts from "./loadTrendingPosts";

export default function* () {
  yield all([fork(loadRecentPosts), fork(loadTrendingPosts)]);
}
