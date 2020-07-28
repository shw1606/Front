import { all, call, fork, put, takeLatest } from "redux-saga/effects";

// actions
import {
  LOAD_POST_DETAIL_REQUEST,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,
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

export default function* () {
  yield all([fork(watchLoadPostDetail)]);
}
