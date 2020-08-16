import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import popularTags from "saga/popularTags";

// actions
import {
  POPULAR_TAGS_LOAD_REQUEST,
  POPULAR_TAGS_LOAD_SUCCESS,
  POPULAR_TAGS_LOAD_FAILURE,
} from "store/actions/postAction";

function loadPopularTagsApi() {
  return popularTags;
  // return axios.get();
}

function* loadPopularTags(action) {
  try {
    yield delay(1000);
    const result = yield call(loadPopularTagsApi);
    yield put({
      type: POPULAR_TAGS_LOAD_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: POPULAR_TAGS_LOAD_FAILURE,
      data: error,
    });
  }
}

export default function* watchLoadPopularTags() {
  yield takeLatest(POPULAR_TAGS_LOAD_REQUEST, loadPopularTags);
}
