import { all, call } from "redux-saga/effects";

import common from "saga/common";
import postSaga from "saga/postSaga";
import postDetailSaga from "saga/postDetailSaga";
import userSaga from "saga/userSaga";

export default function* () {
  yield all([
    call(common),
    call(postSaga),
    call(postDetailSaga),
    call(userSaga),
  ]);
}
