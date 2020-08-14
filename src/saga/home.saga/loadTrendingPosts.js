import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

//actions
import {
  RECENT_POSTS_LOAD_REQUEST,
  RECENT_POSTS_LOAD_SUCCESS,
  RECENT_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";

import postDummy3 from "saga/aditional2.json";

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

export default function* watchLoadRecentPosts() {
  yield takeLatest(RECENT_POSTS_LOAD_REQUEST, loadRecentPosts);
}
