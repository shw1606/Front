import { all, fork } from "redux-saga/effects";

// saga
import loadLikedPostList from "./loadLikedPostList";
import loadReadPostList from "./loadReadPostList";

export default function* () {
  yield all([
    fork(loadLikedPostList),
    fork(loadReadPostList)
  ]);
}
