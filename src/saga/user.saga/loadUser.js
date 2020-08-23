import { delay, put, takeLatest } from "redux-saga/effects";

function laodUserApi() {
  console.log("네트워크 통신 부분");
}

function* laodUser() {
  try {
    const result = yield delay(2000);
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

export default function* watchlaodUser() {
  yield takeLatest("요청 액션 부분", laodUser);
}
