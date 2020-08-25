import immer from "immer";

// actions
import {
  SUBMIT_SIGN_IN_REQUEST,
  SUBMIT_SIGN_IN_SUCCESS,
  SUBMIT_SIGN_IN_FAILURE,
} from "store/actions/modalAction";
import {
  SUBMIT_SIGN_UP_REQUEST,
  SUBMIT_SIGN_UP_SUCCESS,
  SUBMIT_SIGN_UP_FAILURE,
} from "store/actions/modalAction";

// case
import * as submitSignIn from "./submitSignIn";
import * as submitSignUp from "./submitSignUp";

const initialState = {
  message: "",
  sentEmail: false,
  isUser: false,
};

const RegisterReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      // 로그인 요청
      case SUBMIT_SIGN_IN_REQUEST: {
        submitSignIn.request(draft, action.data);
        break;
      }
      // 로그인 성공
      case SUBMIT_SIGN_IN_SUCCESS: {
        submitSignIn.request(draft, action.data);
        break;
      }
      // 로그인 실패
      case SUBMIT_SIGN_IN_FAILURE: {
        submitSignIn.request(draft, action.data);
        break;
      }
      // 회원가입 요청
      case SUBMIT_SIGN_UP_REQUEST: {
        submitSignUp.request(draft, action.data);
        break;
      }
      // 회원가입 성공
      case SUBMIT_SIGN_UP_SUCCESS: {
        submitSignUp.success(draft, action.data);
        break;
      }
      // 회원가입 실패
      case SUBMIT_SIGN_UP_FAILURE: {
        submitSignUp.failure(draft, action.data);
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default RegisterReducer;
