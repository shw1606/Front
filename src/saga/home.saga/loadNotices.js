import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import notices from "saga/notices.json";

// actions
import {
  NOTICE_LOAD_REQUEST,
  NOTICE_LOAD_SUCCESS,
  NOTICE_LOAD_FAILURE,
} from "store/actions/postAction";

function loadNoticesApi() {
  return notices;
  // return axios.get();
}

function* loadNotices(action) {
  try {
    yield delay(1000);
    const result = yield call(loadNoticesApi);
    yield put({
      type: NOTICE_LOAD_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: NOTICE_LOAD_FAILURE,
      data: error,
    });
  }
}

export default function* watchLoadNotices() {
  yield takeLatest(NOTICE_LOAD_REQUEST, loadNotices);
}
