import immer from "immer";

// actions
import {
  CHANGE_MARKDOWN,
  CHANGE_TITLE,
  PRINT_WRITE_SETTING_LAYOUT,
  LOAD_SERIES_LIST_SUCCESS,
  UPLOAD_THUMBNAIL_SUCCESS,
  REMOVE_THUMBNAIL,
  UPLOAD_MARKDOWN_IMAGE_REQUEST,
  UPLOAD_MARKDOWN_IMAGE_SUCCESS,
  SUBMIT_SERIES_INPUT_REQUEST,
  SUBMIT_SERIES_INPUT_SUCCESS,
  SUBMIT_SERIES_INPUT_FAILURE,
  ADD_TAG,
  REMOVE_TAG,
  REMOVE_CLICKED_TAG,
} from "store/actions/writeAction";

// case
import changeMarkdown from "./changeMarkdown";
import changeTitle from "./changeTitle";
import printWriteSetting from "./printWriteSetting";
import uploadThumbnail from "./uploadThumbnail";
import removeThumbnail from "./removeThumbnail";
import * as changeTagList from "./changeTagList";
import * as uploadMarkdownImage from "./uploadMarkdownImage";
import * as submitSeriesInput from "./submitSeriesInput";
import * as loadSeries from "./loadSeries";

const initialState = {
  title: "", // 게시글 제목
  tagList: [], // 게시글 태그 리스트
  markdown: "", // 게시글 본문
  markdownImage: "", // 게시글 본문에 추가한 이미지
  printWriteSetting: false, // 글쓰기 세팅 화면 출력여부 설정
  thumbnail: null, // 설정 페이지에서 추가한 썸네일
  seriesList: [], // 유저가 이전에 사용했던 시리즈 리스트
};

const RegisterReducer = (state = initialState, action) =>
  immer(state, (draft) => {
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
      // 태그 추가
      case ADD_TAG: {
        changeTagList.addTag(draft, action.data);
        break;
      }
      // 태그 삭제
      case REMOVE_TAG: {
        changeTagList.removeTag(draft);
        break;
      }
      // 클릭한 태그 삭제
      case REMOVE_CLICKED_TAG: {
        changeTagList.removeClickedTag(draft, action.data);
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
