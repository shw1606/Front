import { call, put, takeLatest } from "redux-saga/effects";

// actions
import {
  SUBMIT_COMMENT_REQUEST,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAILURE,
} from "store/actions/postDetailAction";

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

export default function* watchSubmitComment() {
  yield takeLatest(SUBMIT_COMMENT_REQUEST, submitComment);
}
