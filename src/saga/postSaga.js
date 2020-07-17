import { all, delay, fork, put, takeLatest } from "redux-saga/effects";

function postApi() {
  console.log("네트워크 통신 부분");
}

function* post() {
  try {
    const result = yield delay(postApi, 2000);
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

function* watchPost() {
  yield takeLatest(post, "요청 액션 부분");
}

export default function* () {
  yield all([fork(watchPost)]);
}
