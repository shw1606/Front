// 회원가입
export const SUBMIT_SIGN_UP_REQUEST = "SUBMIT_SIGN_UP_REQUEST";
export const SUBMIT_SIGN_UP_SUCCESS = "SUBMIT_SIGN_UP_SUCCESS";
export const SUBMIT_SIGN_UP_FAILURE = "SUBMIT_SIGN_UP_FAILURE";
export const submitSignUp = (data) => ({
  type: SUBMIT_SIGN_UP_REQUEST,
  data: {
    email: data,
  },
});

// 로그인
export const SUBMIT_SIGN_IN_REQUEST = "SUBMIT_SIGN_IN_REQUEST";
export const SUBMIT_SIGN_IN_SUCCESS = "SUBMIT_SIGN_IN_SUCCESS";
export const SUBMIT_SIGN_IN_FAILURE = "SUBMIT_SIGN_IN_FAILURE";
export const submitSignIn = (data) => ({
  type: SUBMIT_SIGN_IN_REQUEST,
  data: {
    email: data,
  },
});
