import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_SERIES_POSTS_REQUEST,
  LOAD_SERIES_POSTS_SUCCESS,
  LOAD_SERIES_POSTS_FAILURE,
} from "store/actions/seriesAction";

import dummy from '../seriesListDummy.json';

function loadSeriesPostsAPI() {
  return dummy;
}

function* loadSeriesPosts(action) {
  try {
    const result = yield call(loadSeriesPostsAPI, action.data);
    yield put({
      type: LOAD_SERIES_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_SERIES_POSTS_FAILURE,
      data: error
    });
  }
}

export default function* watchLoadUser() {
  yield takeLatest(LOAD_SERIES_POSTS_REQUEST, loadSeriesPosts);
}
