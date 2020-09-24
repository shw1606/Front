import immer from "immer";

// actions
import { CHANGE_MARKDOWN } from "store/actions/writeAction";
import { CHANGE_TITLE } from "store/actions/writeAction";
import { PRINT_WRITE_SETTING_LAYOUT } from "store/actions/writeAction";
import { LOAD_SERIES_LIST_SUCCESS } from "store/actions/writeAction";
import { UPLOAD_THUMBNAIL_SUCCESS } from "store/actions/writeAction";
import { REMOVE_THUMBNAIL } from "store/actions/writeAction";
import {
  UPLOAD_MARKDOWN_IMAGE_REQUEST,
  UPLOAD_MARKDOWN_IMAGE_SUCCESS,
} from "store/actions/writeAction";
import {
  SUBMIT_SERIES_INPUT_REQUEST,
  SUBMIT_SERIES_INPUT_SUCCESS,
  SUBMIT_SERIES_INPUT_FAILURE,
} from "store/actions/writeAction";

// case
import changeMarkdown from "./changeMarkdown";
import changeTitle from "./changeTitle";
import printWriteSetting from "./printWriteSetting";
import uploadThumbnail from "./uploadThumbnail";
import removeThumbnail from "./removeThumbnail";
import * as uploadMarkdownImage from "./uploadMarkdownImage";
import * as submitSeriesInput from "./submitSeriesInput";
import * as loadSeries from "./loadSeries";

const initialState = {
  title: "",
  markdown: "",
  markdownImage: "",
  printWriteSetting: false, // 글쓰기 세팅 화면 출력여부 설정
  seriesList: [],
  thumbnail: null,
};

const RegisterReducer = (state = initialState, action) => immer(state, (draft) => {
  switch (action.type) {
    // title 변환
    case CHANGE_TITLE: {
      changeTitle(draft, action.data);
      break;
    }
    // markdown 변환
    case CHANGE_MARKDOWN: {
      changeMarkdown(draft, action.data);
      break;
    }
    // 마크다운 이미지 업로드 요청
    case UPLOAD_MARKDOWN_IMAGE_REQUEST: {
      uploadMarkdownImage.request(draft, "");
      break;
    }
    // 마크다운 이미지 업로드 성공
    case UPLOAD_MARKDOWN_IMAGE_SUCCESS: {
      uploadMarkdownImage.success(draft, action.data);
      break;
    }
    // 글쓰기 세팅 화면 출력여부 설정
    case PRINT_WRITE_SETTING_LAYOUT: {
      printWriteSetting(draft, action.data);
      break;
    }
    // 썸네일 업로드
    case UPLOAD_THUMBNAIL_SUCCESS: {
      uploadThumbnail(draft, action.data);
      break;
    }
    // 업로드 된 썸네일 제거
    case REMOVE_THUMBNAIL: {
      removeThumbnail(draft, action.data);
      break;
    }
    // 시리즈 리스트 불러오기
    case LOAD_SERIES_LIST_SUCCESS: {
      loadSeries.success(draft, action.data);
      break;
    }
    // 시리즈 인풋값 전달 요청
    case SUBMIT_SERIES_INPUT_REQUEST: {
      submitSeriesInput.request(draft, action.data);
      break;
    }
    // 시리즈 인풋값 전달 성공
    case SUBMIT_SERIES_INPUT_SUCCESS: {
      submitSeriesInput.suceess(draft, action.data);
      break;
    }
    // 시리즈 인풋값 전달 실패
    case SUBMIT_SERIES_INPUT_FAILURE: {
      submitSeriesInput.failure(draft, action.data);
      break;
    }
    default: {
      break;
    }
  }
});

export default RegisterReducer;
