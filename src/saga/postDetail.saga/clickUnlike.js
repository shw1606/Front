import { call, put, takeLatest } from "redux-saga/effects";

// actions
import {
  UNLIKE_POST_REQUEST,
  UNLIKE_POST_SUCCESS,
  UNLIKE_POST_FAILURE,
} from "store/actions/postDetailAction";

function clickUnlikeAPI() {
  return "추가";
}

function* clickUnlike(action) {
  try {
    yield call(clickUnlikeAPI, action.data);
    yield put({
      type: UNLIKE_POST_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: UNLIKE_POST_FAILURE,
      data: error.response.data,
    });
  }
}

export default function* watchclickUnlike() {
  yield takeLatest(UNLIKE_POST_REQUEST, clickUnlike);
}
