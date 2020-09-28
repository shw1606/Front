import immer from "immer";

// action
import { LOAD_SAVES_LIST_SUCCESS } from "store/actions/savesAction";
import {
  DELETE_SAVE_ITEM_REQUEST,
  DELETE_SAVE_ITEM_SUCCESS,
  DELETE_SAVE_ITEM_FAILURE,
} from "store/actions/savesAction";
import { ADD_SAVED_LIST_SUCCESS } from "store/actions/savesAction";

// case
import addSavedPost from "./addSavedPost";
import loadSavesList from "./loadSavesList";
import * as deleteSaveItem from "./deleteSaveItem";

const initialState = {
  saveList: [], // 임시 글 리스트
  successItemDelete: false, // 임시 글 아이템 삭제 성공 여부 체크
};

const SaveReducer = (state = initialState, action) =>
  immer(state, (draft) => {
    switch (action.type) {
      // 임시저장 게시글 추가
      case ADD_SAVED_LIST_SUCCESS: {
        addSavedPost(draft, action.data);
        break;
      }
      // 임시 글 목록 불러오기
      case LOAD_SAVES_LIST_SUCCESS: {
        loadSavesList(draft, action.data);
        break;
      }
      // 임시 글 삭제 요청
      case DELETE_SAVE_ITEM_REQUEST: {
        deleteSaveItem.request(draft, action.data);
        break;
      }
      // 임시 글 삭제 성공
      case DELETE_SAVE_ITEM_SUCCESS: {
        deleteSaveItem.success(draft, action.data);
        break;
      }
      // 임시 글 삭제 실패
      case DELETE_SAVE_ITEM_FAILURE: {
        deleteSaveItem.failure(draft, action.data);
        break;
      }
      default: {
        break;
      }
    }
  });

export default SaveReducer;
