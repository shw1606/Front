import axios from "axios";
import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";

import postDummy1 from "saga/dummy.json";
import postDummy2 from "saga/aditional1.json";
import postDummy3 from "saga/aditional2.json";
import postDummy4 from "saga/aditional3.json";
import notices from "saga/notices.json";
import popularTags from "saga/popularTags";

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
// 공지사항 load action
import {
  NOTICE_LOAD_REQUEST,
  NOTICE_LOAD_SUCCESS,
  NOTICE_LOAD_FAILURE,
} from "store/actions/postAction";
// 인기태그 load action
import {
  POPULAR_TAGS_LOAD_REQUEST,
  POPULAR_TAGS_LOAD_SUCCESS,
  POPULAR_TAGS_LOAD_FAILURE,
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

function loadNoticesApi() {
  return notices;
  // return axios.get();
}

function* loadNotices(action) {
  try {
    yield delay(1000);
    const result = yield call(loadNoticesApi);
    yield put({
      type: NOTICE_LOAD_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: NOTICE_LOAD_FAILURE,
      data: error,
    });
  }
}

function* watchLoadNotices() {
  yield takeLatest(NOTICE_LOAD_REQUEST, loadNotices);
}
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

function* watchLoadPopularTags() {
  yield takeLatest(POPULAR_TAGS_LOAD_REQUEST, loadPopularTags);
}
export default function* () {
  yield all([
    fork(watchLoadPosts),
    fork(watchLoadRecentPosts),
    fork(watchLoadNotices),
    fork(watchLoadPopularTags),
  ]);
}
