// 글쓰기 창에서 입력한 내용을 markdown으로 변환
export const CHANGE_MARKDOWN = "CHANGE_MARKDOWN";
export const changeMarkdown = (data) => ({
  type: CHANGE_MARKDOWN,
  data,
});

// 제목 내용을 markdown으로 변환
export const CHANGE_TITLE = "CHANGE_TITLE";
export const changeTitle = (data) => ({
  type: CHANGE_TITLE,
  data,
});

// 태그 추가
export const ADD_TAG = "ADD_TAG";
export const addTag = (data) => ({ type: ADD_TAG, data });

// 태그 삭제
export const REMOVE_TAG = "REMOVE_TAGs";
export const removeTag = (data) => ({ type: REMOVE_TAG, data });

// 클릭한 태그 삭제
export const REMOVE_CLICKED_TAG = "REMOVE_CLICKED_TAG";
export const removeClickedTag = (data) => ({ type: REMOVE_CLICKED_TAG, data });

// 마크다운 이미지 업로드
export const UPLOAD_MARKDOWN_IMAGE_REQUEST = "UPLOAD_MARKDOWN_IMAGE_REQUEST";
export const UPLOAD_MARKDOWN_IMAGE_SUCCESS = "UPLOAD_MARKDOWN_IMAGE_SUCCESS";
export const UPLOAD_MARKDOWN_IMAGE_FAILURE = "UPLOAD_MARKDOWN_IMAGE_FAILURE";
export const uploadMarkdownImageRequest = (data) => ({
  type: UPLOAD_MARKDOWN_IMAGE_REQUEST,
  data,
});

// 글쓰기 세팅 화면 출력여부 설정
export const PRINT_WRITE_SETTING_LAYOUT = "PRINT_WRITE_SETTING_LAYOUT";
export const printWriteSettingLayout = (data) => ({
  type: PRINT_WRITE_SETTING_LAYOUT,
  data,
});

// 썸네일 업로드
export const UPLOAD_THUMBNAIL_REQUEST = "UPLOAD_THUMBNAIL_REQUEST";
export const UPLOAD_THUMBNAIL_SUCCESS = "UPLOAD_THUMBNAIL_SUCCESS";
export const UPLOAD_THUMBNAIL_FAILURE = "UPLOAD_THUMBNAIL_FAILURE";
export const uploadThumbnailRequest = (data) => ({
  type: UPLOAD_THUMBNAIL_REQUEST,
  data,
});

// 업로드 된 썸네일 제거
export const REMOVE_THUMBNAIL = "REMOVE_THUMBNAIL";
export const removeThumbnail = () => ({ type: REMOVE_THUMBNAIL });

// 시리즈 리스트 불러오기
export const LOAD_SERIES_LIST_REQUEST = "LOAD_SERIES_LIST_REQUEST";
export const LOAD_SERIES_LIST_SUCCESS = "LOAD_SERIES_LIST_SUCCESS";
export const LOAD_SERIES_LIST_FAILURE = "LOAD_SERIES_LIST_FAILURE";
export const loadSeriesList = (data) => ({
  type: LOAD_SERIES_LIST_REQUEST,
  data,
});

// 시리즈 input값 전달
export const SUBMIT_SERIES_INPUT_REQUEST = "SUBMIT_SERIES_INPUT_REQUEST";
export const SUBMIT_SERIES_INPUT_SUCCESS = "SUBMIT_SERIES_INPUT_SUCCESS";
export const SUBMIT_SERIES_INPUT_FAILURE = "SUBMIT_SERIES_INPUT_FAILURE";
export const submitSeriesInput = (data) => ({
  type: SUBMIT_SERIES_INPUT_REQUEST,
  data,
});
