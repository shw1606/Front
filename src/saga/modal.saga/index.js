import { all, fork } from "redux-saga/effects";

// saga
import signIn from "./signIn";
import signUp from "./signUp";

export default function* () {
  yield all([fork(signIn), fork(signUp)]);
}
