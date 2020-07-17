import { all, call } from "redux-saga/effects";

import postSaga from "saga/postSaga";
import userSaga from "saga/userSaga";

export default function* () {
  yield all([call(postSaga), call(userSaga)]);
}
