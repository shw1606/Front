import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_USER_TAGS_REQUEST,
  LOAD_USER_TAGS_SUCCESS,
  LOAD_USER_TAGS_FAILURE
} from "store/actions/userAction";

import dummy from "../userTagsDummy.json";

function loadUserTagsAPI() {
  return dummy;
}

function* loadUserTags(action) {
  try {
    const result = yield call(loadUserTagsAPI, action.id);
    yield put({
      type: LOAD_USER_TAGS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_USER_TAGS_FAILURE,
      data: error
    });
  }
}

export default function* watchLoadUserTags() {
  yield takeLatest(LOAD_USER_TAGS_REQUEST, loadUserTags);
}
