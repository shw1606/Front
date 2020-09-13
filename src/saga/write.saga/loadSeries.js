import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_SERIES_LIST_REQUEST,
  LOAD_SERIES_LIST_SUCCESS,
  LOAD_SERIES_LIST_FAILURE,
} from "store/actions/writeAction";

// dummy
import loadSeriesDummy from "saga/_dummy/loadSeries.json";

function loadSeriesAPI() {
  //   return axios.get();
  return loadSeriesDummy;
}

function* loadSeries(action) {
  try {
    const result = yield call(loadSeriesAPI, action.data);
    yield put({ type: LOAD_SERIES_LIST_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: LOAD_SERIES_LIST_FAILURE, data: error });
  }
}

export default function* () {
  yield takeLatest(LOAD_SERIES_LIST_REQUEST, loadSeries);
}
