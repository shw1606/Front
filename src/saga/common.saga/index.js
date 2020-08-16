import { all, fork } from "redux-saga/effects";

// saga
import clearAlert from "./clearAlert";

export default function* () {
  yield all([fork(clearAlert)]);
}
