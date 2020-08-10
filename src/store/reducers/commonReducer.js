import immer from "immer";

// 알림창 발생 요청
import { LOCAL_RQEUEST_ALERT } from "store/actions/commonAction";
// 알림창 출력 clear
import {
  LOCAL_CLEAR_ALERT,
  LOCAL_CLICK_ALERT_CLOSE,
} from "store/actions/commonAction";

const initialState = {
  alertList: [],
};

const PostReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      // 알림창 발생
      case LOCAL_RQEUEST_ALERT: {
        let alertProperties = null;
        const id = Math.floor(Math.random() * 1000 + 1) + "alert";
        const color = {
          green: "#07bc0c",
        };
        switch (action.data.case) {
          case "copy": {
            alertProperties = {
              id,
              description: "링크가 복사되었습니다",
              backgroundColor: color["green"],
            };
            break;
          }
          case "logIn": {
            alertProperties = {};
            break;
          }
          default: {
            break;
          }
        }
        draft.alertList.push(alertProperties);
        break;
      }
      // 알림창 자동 삭제
      case LOCAL_CLEAR_ALERT: {
        draft.alertList.shift();
        break;
      }
      // 알림창 닫기 버튼 클릭
      case LOCAL_CLICK_ALERT_CLOSE: {
        const alertIndex = draft.alertList.findIndex(
          (value) => value.id === action.data
        );
        draft.alertList.splice(alertIndex, 1);
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default PostReducer;
