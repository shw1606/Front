import { all, fork } from "redux-saga/effects";

// saga
import submitRegisterInfo from "./submitRegisterInfo";

export default function* () {
  yield all([fork(submitRegisterInfo)]);
}
