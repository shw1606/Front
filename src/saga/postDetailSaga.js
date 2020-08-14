import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// actions
import {
  LOAD_POST_DETAIL_REQUEST,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
} from "store/actions/postDetailAction";
import {
  SUBMIT_COMMENT_REQUEST,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAILURE,
} from "store/actions/postDetailAction";
import {
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
} from "store/actions/postDetailAction";

// dummy
import dummy from "./postDetailDummy.json";

// 게시글 상세 데이터 불러오기
function loadPostDetailAPI() {
  return dummy;
}
function* loadPostDetail(action) {
  try {
    const result = yield call(loadPostDetailAPI, action.data);
    yield put({
      type: LOAD_POST_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: LOAD_POST_DETAIL_FAILURE,
      data: error.response.data,
    });
  }
}
function* watchLoadPostDetail() {
  yield takeLatest(LOAD_POST_DETAIL_REQUEST, loadPostDetail);
}

// 댓글 추가
function submitCommentAPI(data) {
  const dummyComment = {
    status: 200,
    data: {
      _id: Math.floor(Math.random() * 1000),
      post_id: Math.floor(Math.random() * 1000),
      author: "이이이이",
      comment_context: data.text,
      updated_at: "2020년 7월 28일",
      re_comments: [],
    },
  };
  return dummyComment;
}
function* submitComment(action) {
  try {
    const result = yield call(submitCommentAPI, action.data);
    yield put({
      type: SUBMIT_COMMENT_SUCCESS,
      data: result.data,
      front: action.data,
    });
  } catch (error) {
    yield put({
      type: SUBMIT_COMMENT_FAILURE,
      data: error.response.data,
    });
  }
}
function* watchSubmitComment() {
  yield takeLatest(SUBMIT_COMMENT_REQUEST, submitComment);
}

// 좋아요 추가
function likePostAPI() {
  return "추가";
}
function* likePost(action) {
  try {
    yield call(likePostAPI, action.data);
    yield put({
      type: LIKE_POST_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: LIKE_POST_FAILURE,
      data: error.response.data,
    });
  }
}
function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

export default function* () {
  yield all([
    fork(watchLoadPostDetail),
    fork(watchSubmitComment),
    fork(watchLikePost),
  ]);
}
