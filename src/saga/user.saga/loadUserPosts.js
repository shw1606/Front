import { call, delay, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE
} from "store/actions/userAction";

import dummy from "saga/userPostListDummy.json";

function loadUserPostsAPI(id) {
  return dummy;
}

function* loadUserPosts(action) {
  try {
    yield delay(1000);
    const result = yield call(loadUserPostsAPI, action.id);
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      data: error
    });
  }
}

export default function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}