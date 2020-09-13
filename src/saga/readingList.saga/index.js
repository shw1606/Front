import { all, fork } from "redux-saga/effects";

// saga
import loadLikedReadingList from "./loadLikedReadingList";
import loadReadReadingList from "./loadReadReadingList";

export default function* () {
  yield all([
    fork(loadLikedReadingList),
    fork(loadReadReadingList)
  ]);
}
