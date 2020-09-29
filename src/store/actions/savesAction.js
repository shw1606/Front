// 임시 글 리스트에 임시 저장 된 게시글 추가
export const ADD_SAVED_LIST_SUCCESS = "ADD_SAVED_LIST_SUCCESS";
export const ADD_SAVED_LIST_FAILURE = "ADD_SAVED_LIST_FAILURE";

// 임시 글 목록 불러오기
export const LOAD_SAVES_LIST_REQUEST = "LOAD_SAVES_LIST_REQUEST";
export const LOAD_SAVES_LIST_SUCCESS = "LOAD_SAVES_LIST_SUCCESS";
export const LOAD_SAVES_LIST_FAILURE = "LOAD_SAVES_LIST_FAILURE";
export const laodSavesListReuest = () => ({ type: LOAD_SAVES_LIST_REQUEST });

// 임시 글 삭제
export const DELETE_SAVE_ITEM_REQUEST = "DELETE_SAVE_ITEM_REQUEST";
export const DELETE_SAVE_ITEM_SUCCESS = "DELETE_SAVE_ITEM_SUCCESS";
export const DELETE_SAVE_ITEM_FAILURE = "DELETE_SAVE_ITEM_FAILURE";
export const deleteSaveItemRequest = (data) => ({
  type: DELETE_SAVE_ITEM_REQUEST,
  data,
});
