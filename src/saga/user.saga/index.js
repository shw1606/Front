import { all, fork } from "redux-saga/effects";

// saga
import loadUserProfile from "./loadUserProfile";

export default function* () {
  yield all([
      fork(loadUserProfile)
  ]);
}
