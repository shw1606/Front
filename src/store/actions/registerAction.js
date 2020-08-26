// 아이디 텍스트 변경
export const LOCAL_CHANGE_ID = "LOCAL_CHANGE_ID";
export const changeId = (text) => ({ type: LOCAL_CHANGE_ID, data: text });

// 한 줄 소개 텍스트 변경
export const LOCAL_CHANGE_INTRODUCE = "LOCAL_CHANGE_INTRODUCE";
export const changeInroduce = (text) => ({
  type: LOCAL_CHANGE_INTRODUCE,
  data: text,
});

// 입력값 전송
export const SUBMIT_REGISTER_INFO_REQUEST = "SUBMIT_REGISTER_INFO_REQUEST";
export const SUBMIT_REGISTER_INFO_SUCCESS = "SUBMIT_REGISTER_INFO_SUCCESS";
export const SUBMIT_REGISTER_INFO_FAILURE = "SUBMIT_REGISTER_INFO_FAILURE";
export const submitRegisterInfo = (value) => ({
  type: SUBMIT_REGISTER_INFO_REQUEST,
  data: {
    ...value,
  },
});
