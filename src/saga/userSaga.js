import { all, delay, fork, put, takeLatest } from "redux-saga/effects";

function userApi() {
  console.log("네트워크 통신 부분");
}

function* user() {
  try {
    const result = yield delay(userApi, 2000);
    yield put({
      action: "성공 액션 부분",
      data: result,
    });
  } catch (error) {
    yield put({
      action: "성공 실패 부분",
      data: error,
    });
  }
}

function* watchUser() {
  yield takeLatest(user, "요청 액션 부분");
}

export default function* () {
  yield all([fork(watchUser)]);
}
