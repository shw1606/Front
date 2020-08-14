import { delay, takeEvery, put } from "redux-saga/effects";

// action
import {
  LOCAL_REQUEST_CLEAR_ALERT,
  LOCAL_CLEAR_ALERT,
} from "store/actions/commonAction";

function* clearAlert(action) {
  yield delay(3000);
  yield put({
    type: LOCAL_CLEAR_ALERT,
    data: action.data,
  });
}

export default function* watchClearAlert() {
  yield takeEvery(LOCAL_REQUEST_CLEAR_ALERT, clearAlert);
}
