// import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import {
  DELETE_SAVE_ITEM_REQUEST,
  DELETE_SAVE_ITEM_SUCCESS,
  DELETE_SAVE_ITEM_FAILURE,
} from "store/actions/savesAction";

function deleteSaveItemAPI(data) {
  // return axios.delte("/", {});
  return { data };
}

function* deleteSaveItem(action) {
  try {
    const result = yield call(deleteSaveItemAPI, action.data);
    yield put({ type: DELETE_SAVE_ITEM_SUCCESS, data: result.data });
  } catch (error) {
    yield put({ type: DELETE_SAVE_ITEM_FAILURE, data: error });
  }
}

export default function* watchdeleteSaveItem() {
  yield takeLatest(DELETE_SAVE_ITEM_REQUEST, deleteSaveItem);
}
