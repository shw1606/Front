import immer from "immer";

// actions
import {
  LOCAL_RQEUEST_ALERT,
  LOCAL_CLEAR_ALERT,
  LOCAL_CLICK_ALERT_CLOSE,
} from "store/actions/commonAction";

// case
import printAlert from "./printAlert";
import clearAlert from "./clearAlert";
import deleteAlert from "./deleteAlert";

const initialState = {
  alertList: [],
};

const CommonReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      // 알림창 발생
      case LOCAL_RQEUEST_ALERT: {
        printAlert(draft, action.data);
        break;
      }
      // 알림창 삭제
      case LOCAL_CLEAR_ALERT: {
        clearAlert(draft, action.data);
        break;
      }
      // 알림창 삭제 버튼 클릭
      case LOCAL_CLICK_ALERT_CLOSE: {
        deleteAlert(draft, action.data);
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default CommonReducer;
