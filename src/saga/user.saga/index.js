import { all, fork } from "redux-saga/effects";

// saga
import loadUser from "./loadUser";

export default function* () {
  yield all([fork(loadUser)]);
}
