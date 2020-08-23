import { call, put, takeLatest } from "redux-saga/effects";

// actions
import {
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
} from "store/actions/postDetailAction";

function clickLikeAPI() {
  return "추가";
}

function* clickLike(action) {
  try {
    yield call(clickLikeAPI, action.data);
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

export default function* watchclickLike() {
  yield takeLatest(LIKE_POST_REQUEST, clickLike);
}
