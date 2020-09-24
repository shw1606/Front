import { call, delay, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_USER_SERIES_LIST_REQUEST,
  LOAD_USER_SERIES_LIST_SUCCESS,
  LOAD_USER_SERIES_LIST_FAILURE
} from "store/actions/userAction";

import dummy from '../userSeriesDummy';

function loadUserSeriesListAPI(id) {
  return dummy;
}

function* loadUserSeriesList(action) {
  try {
    yield delay(1000);
    const result = yield call(loadUserSeriesListAPI, action.id);
    yield put({
      type: LOAD_USER_SERIES_LIST_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_SERIES_LIST_FAILURE,
      data: error
    });
  }
}

export default function* watchLoadUserSeriesList() {
  yield takeLatest(LOAD_USER_SERIES_LIST_REQUEST, loadUserSeriesList);
}
