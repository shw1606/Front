import { all, fork } from "redux-saga/effects";

// saga
import loadLikedPostList from "./loadLikedPostList";

export default function* () {
  yield all([
    fork(loadLikedPostList)
  ]);
}
