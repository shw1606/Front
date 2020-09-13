import { delay, call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_READ_POSTS_REQUEST,
  LOAD_READ_POSTS_SUCCESS,
  LOAD_READ_POSTS_FAILURE
} from "store/actions/readingListAction";

import dummy from "../aditional2";

function loadReadPostsAPI(username) {
  return dummy;
}

function* loadReadPosts(action) {
  try {
    yield delay(1000);
    const result = yield call(loadReadPostsAPI, action.username);
    yield put({
      type: LOAD_READ_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_READ_POSTS_FAILURE,
      data: error
    });
  }
}


export default function* watchLoadReadPosts() {
  yield takeLatest(LOAD_READ_POSTS_REQUEST, loadReadPosts);
}
