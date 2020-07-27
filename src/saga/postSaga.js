import axios from "axios";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

import postDummy1 from "saga/dummy.json";
import postDummy2 from "saga/aditional1.json";
import postDummy3 from "saga/aditional2.json";
import postDummy4 from "saga/aditional3.json";

// load post actions
import {
  POSTS_LOAD_REQUEST,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_FAILURE,
} from "store/actions/postAction";
// 최신 게시글 load action
import {
  RECENT_POSTS_LOAD_REQUEST,
  RECENT_POSTS_LOAD_SUCCESS,
  RECENT_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";

function loadPostsApi({ id = 0, heart = 0 }) {
  return id === 0 ? postDummy1 : postDummy2;
  // return axios.get(`/postIoad?id=${id}&heart=${heart}`)
}

function* loadPosts(action) {
  try {
    yield delay(1000);
    const result = yield call(loadPostsApi, action.data);
    yield put({
      type: POSTS_LOAD_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: POSTS_LOAD_FAILURE,
      data: error,
    });
  }
}

function* watchLoadPosts() {
  yield takeLatest(POSTS_LOAD_REQUEST, loadPosts);
}

function loadRecentPostsApi() {
  return postDummy3;
  // return axios.get(`/postIoad?id=${id}&heart=${heart}`)
}

function* loadRecentPosts(action) {
  try {
    yield delay(1000);
    const result = yield call(loadRecentPostsApi);
    yield put({
      type: RECENT_POSTS_LOAD_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: RECENT_POSTS_LOAD_FAILURE,
      data: error,
    });
  }
}

function* watchLoadRecentPosts() {
  yield takeLatest(RECENT_POSTS_LOAD_REQUEST, loadRecentPosts);
}

export default function* () {
  yield all([fork(watchLoadPosts), fork(watchLoadRecentPosts)]);
}
