import { delay, call, put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_LIKED_POSTS_REQUEST,
  LOAD_LIKED_POSTS_SUCCESS,
  LOAD_LIKED_POSTS_FAILURE
} from "store/actions/postListAction";

import dummy from "../aditional2";

function loadLikedPostsAPI(username) {
  return dummy;
}

function* loadLikedPosts(action) {
  try {
    yield delay(1000);
    const result = yield call(loadLikedPostsAPI, action.id);
    yield put({
      type: LOAD_LIKED_POSTS_SUCCESS,
      data: result.data
    });
  } catch (error) {
    yield put({
      type: LOAD_LIKED_POSTS_FAILURE,
      data: error
    });
  }
}


export default function* watchLoadUser() {
  yield takeLatest(LOAD_LIKED_POSTS_REQUEST, loadLikedPosts);
}
