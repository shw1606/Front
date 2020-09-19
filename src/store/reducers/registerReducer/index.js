import immer from "immer";

// actions
import {
  LOCAL_CHANGE_ID,
  LOCAL_CHANGE_INTRODUCE,
} from "store/actions/registerAction";
import {
  SUBMIT_REGISTER_INFO_REQUEST,
  SUBMIT_REGISTER_INFO_SUCCESS,
  SUBMIT_REGISTER_INFO_FAILURE,
} from "store/actions/registerAction";

// case
import changeId from "./changeId";
import changeIntroduce from "./changeIntroduce";
import * as submitRgisterInfo from "./submitRegisterInfo";

const initialState = {
  id: "",
  prevId: "",
  introduce: "",
  prevIntroduce: "",
  errorMessage: "",
};

const RegisterReducer = (state = initialState, action) => immer(state, (draft) => {
  switch (action.type) {
    // 아이디 텍스트 변경
    case LOCAL_CHANGE_ID: {
      changeId(draft, action.data);
      break;
    }
    // 한 줄 소개 텍스트 변경
    case LOCAL_CHANGE_INTRODUCE: {
      changeIntroduce(draft, action.data);
      break;
    }
    // 등록 정보 전송 요청
    case SUBMIT_REGISTER_INFO_REQUEST: {
      submitRgisterInfo.request(draft, action.data);
      break;
    }
    // 등록 정보 전송 성공
    case SUBMIT_REGISTER_INFO_SUCCESS: {
      submitRgisterInfo.success(draft, action.data);
      break;
    }
    // 등록 정보 전송 실패
    case SUBMIT_REGISTER_INFO_FAILURE: {
      submitRgisterInfo.failure(draft, action.data);
      break;
    }
    default: {
      break;
    }
  }
});

export default RegisterReducer;
