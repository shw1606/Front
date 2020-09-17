import { call, put, takeLatest } from "redux-saga/effects";

// actions
import {
  SET_TOC_REQUEST,
  SET_TOC_SUCCESS,
  SET_TOC_FAILURE
} from "store/actions/postDetailAction";

function* setToc(action) {
  try {
    yield put({
      type: SET_TOC_SUCCESS,
      data: action.toc
    });
  } catch (error) {
    yield put({
      type: SET_TOC_FAILURE,
      data: error
    });
  }
}

export default function* watchSetToc() {
  yield takeLatest(SET_TOC_REQUEST, setToc);
}
