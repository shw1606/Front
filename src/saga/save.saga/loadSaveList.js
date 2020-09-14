// import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  LOAD_SAVES_LIST_REQUEST,
  LOAD_SAVES_LIST_SUCCESS,
  LOAD_SAVES_LIST_FAILURE,
} from "store/actions/savesAction";

import loadSaveListDummy from "saga/_dummy/loadSaveList.json";

function loadSaveListAPI() {
  //   return axios.get();
  return loadSaveListDummy;
}

function* loadSaveList(action) {
  try {
    const result = yield call(loadSaveListAPI);
    yield put({ type: LOAD_SAVES_LIST_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: LOAD_SAVES_LIST_FAILURE, data: error });
  }
}

export default function* watchloadSaveList() {
  yield takeLatest(LOAD_SAVES_LIST_REQUEST, loadSaveList);
}
