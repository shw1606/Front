import { call, delay, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_USER_POSTS_REQUEST,
  LOAD_USER_POSTS_SUCCESS,
  LOAD_USER_POSTS_FAILURE
} from "store/actions/userAction";

import dummy1 from "saga/userPostListDummy.json";
import dummy2 from "saga/userPostListDummyWithTags.json"

//유저가 작성한 글 목록을 태그에 따라 필터링해서 가져오는 API
function loadUserPostsAPI(user_id, tag) {
  if(tag === "TIL") return dummy2;
  else return dummy1;
}

function* loadUserPosts(action) {
  try {
    yield delay(1000);
    const result = yield call(loadUserPostsAPI, action.user_id, action.tag);
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