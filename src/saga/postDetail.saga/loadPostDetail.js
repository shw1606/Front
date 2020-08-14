import { call, put, takeLatest } from "redux-saga/effects";

// actions
import {
  LOAD_POST_DETAIL_REQUEST,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
} from "store/actions/postDetailAction";

// dummy
import dummy from "./postDetailDummy.json";

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

export default function* watchLoadPostDetail() {
  yield takeLatest(LOAD_POST_DETAIL_REQUEST, loadPostDetail);
}
