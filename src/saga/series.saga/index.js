import { all, fork } from "redux-saga/effects";

// saga
import loadSeriesPosts from "./loadSeriesPosts";

export default function* () {
  yield all([
    fork(loadSeriesPosts),
  ]);
}
