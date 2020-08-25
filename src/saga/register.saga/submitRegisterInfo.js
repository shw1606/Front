import { call, delay, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import notices from "saga/notices.json";

// actions
import {
  SUBMIT_REGISTER_INFO_REQUEST,
  SUBMIT_REGISTER_INFO_SUCCESS,
  SUBMIT_REGISTER_INFO_FAILURE,
} from "store/actions/registerAction";

// 아이디 에러 체크
function checkId(id) {
  const errorText =
    "아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.";
  if (!id) {
    throw errorText;
  }
  if (!/^[a-z0-9-_]{3,16}$/.test(id)) {
    throw errorText;
  }
}

// 한 줄 소개 에러 체크
function checkIntroduce(introduce) {
  const errorText = "한 줄 소개를 140자 미만으로 작성하세요.";
  if (introduce.length > 140) {
    throw errorText;
  }
}

function submitRegisterInfoApi() {
  return notices;
  // return axios.get();
}

function* submitRegisterInfo(action) {
  try {
    yield delay(1000);
    const { id, introduce } = action.data;
    yield call(checkId(id)); // 아이디 에러 체크
    yield call(checkIntroduce(introduce)); // 한 줄 소개 에러 체크
    const result = yield call(submitRegisterInfoApi);
    yield put({
      type: SUBMIT_REGISTER_INFO_SUCCESS,
      data: result.data,
    });
  } catch (error) {
    if (error.response) {
      console.log(error);
    } else {
      yield put({
        type: SUBMIT_REGISTER_INFO_FAILURE,
        data: error,
      });
    }
  }
}

export default function* watchsubmitRegisterInfo() {
  yield takeLatest(SUBMIT_REGISTER_INFO_REQUEST, submitRegisterInfo);
}
