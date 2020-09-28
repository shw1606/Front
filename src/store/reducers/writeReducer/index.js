import immer from "immer";

// actions
import {
  CHANGE_MARKDOWN,
  CHANGE_TITLE,
  CHANGE_POST_ACCESS,
  CHANGE_POST_URL,
  PRINT_WRITE_SETTING_LAYOUT,
  LOAD_SERIES_LIST_SUCCESS,
  UPLOAD_THUMBNAIL_SUCCESS,
  REMOVE_THUMBNAIL,
  UPLOAD_MARKDOWN_IMAGE_REQUEST,
  UPLOAD_MARKDOWN_IMAGE_SUCCESS,
  LOAD_SAVED_POST_REQUEST,
  LOAD_SAVED_POST_SUCCESS,
  SUBMIT_SERIES_INPUT_REQUEST,
  SUBMIT_SERIES_INPUT_SUCCESS,
  SUBMIT_SERIES_INPUT_FAILURE,
  SUBMIT_SAVED_POST_SUCCESS,
  SUBMIT_WRITTEN_POST_SUCCESS,
  ADD_TAG,
  REMOVE_TAG,
  REMOVE_CLICKED_TAG,
  EXIT_WRITE_PAGE,
} from "store/actions/writeAction";

// case
import changeMarkdown from "./changeMarkdown";
import changeTitle from "./changeTitle";
import submitSavedPost from "./submitSavedPost";
import printWriteSetting from "./printWriteSetting";
import uploadThumbnail from "./uploadThumbnail";
import removeThumbnail from "./removeThumbnail";
import changeAccess from "./changeAccess";
import changeUrl from "./changeUrl";
import exitWritePage from "./exitWritePage";
import submitWrittenPost from "./submitWrittenPost";
import * as loadSavedPost from "./loadSavedPost";
import * as changeTagList from "./changeTagList";
import * as uploadMarkdownImage from "./uploadMarkdownImage";
import * as submitSeriesInput from "./submitSeriesInput";
import * as loadSeries from "./loadSeries";

const initialState = {
  postId: "", // 임시 저장한 게시글 id
  title: "", // 게시글 제목
  tagList: [], // 게시글 태그 리스트
  markdown: "", // 게시글 본문
  markdownImage: "", // 게시글 본문에 추가한 이미지
  printWriteSetting: false, // 글쓰기 세팅 화면 출력여부 설정
  thumbnail: "", // 설정 페이지에서 추가한 썸네일
  access: true, // 게시글 공개 설정(true면 전체 공개)
  postUrl: "", // 게시글 URL 설정
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
      // 게시글 임시 저장
      case SUBMIT_SAVED_POST_SUCCESS: {
        submitSavedPost(draft, action.data);
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
      // 임시 저장 된 게시글 불러오기 요청
      case LOAD_SAVED_POST_REQUEST: {
        loadSavedPost.request(draft);
        break;
      }
      // 임시 저장 된 게시글 불러오기 성공
      case LOAD_SAVED_POST_SUCCESS: {
        loadSavedPost.success(draft, action.data);
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
      // 게시글 공개설정
      case CHANGE_POST_ACCESS: {
        changeAccess(draft);
        break;
      }
      // 게시글 URL 설정
      case CHANGE_POST_URL: {
        changeUrl(draft, action.data);
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
      // 작성한 게시글 전달
      case SUBMIT_WRITTEN_POST_SUCCESS: {
        submitWrittenPost(draft);
        break;
      }
      // 게시글 작성 페이지 나가기
      case EXIT_WRITE_PAGE: {
        exitWritePage(draft);
        break;
      }
      default: {
        break;
      }
    }
  });

export default RegisterReducer;
