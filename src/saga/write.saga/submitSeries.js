// import axios from "axios";
import { delay, call, put, takeLatest } from "redux-saga/effects";

import {
  SUBMIT_SERIES_INPUT_REQUEST,
  SUBMIT_SERIES_INPUT_SUCCESS,
  SUBMIT_SERIES_INPUT_FAILURE,
} from "store/actions/writeAction";

function submitSeriesAPI(data) {
  return { data };
  // return axios.get();
}

function* submitSeries(action) {
  try {
    delay(1000);
    const result = yield call(submitSeriesAPI, action.data);
    yield put({ type: SUBMIT_SERIES_INPUT_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: SUBMIT_SERIES_INPUT_FAILURE, data: error });
  }
}

export default function* () {
  yield takeLatest(SUBMIT_SERIES_INPUT_REQUEST, submitSeries);
}
