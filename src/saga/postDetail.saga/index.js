import { all, fork } from "redux-saga/effects";

// saga
import clickLike from "./clickLike";
import clickUnlike from "./clickUnlike";
import loadPostDetail from "./loadPostDetail";
import submitComment from "./submitComment";
import setToc from "./setToc";

export default function* () {
  yield all([
    fork(clickLike),
    fork(clickUnlike),
    fork(loadPostDetail),
    fork(submitComment),
    fork(setToc)
  ]);
}
