import immer from "immer";

// action
import {
  POSTS_LOAD_REQUEST,
  POSTS_LOAD_SUCCESS,
  POSTS_LOAD_FAILURE,
} from "store/actions/postAction";
// 최신 게시글 load action
import {
  RECENT_POSTS_LOAD_REQUEST,
  RECENT_POSTS_LOAD_SUCCESS,
  RECENT_POSTS_LOAD_FAILURE,
} from "store/actions/postAction";
// 공지사항 load action
import {
  NOTICE_LOAD_REQUEST,
  NOTICE_LOAD_SUCCESS,
  NOTICE_LOAD_FAILURE,
} from "store/actions/postAction";
// 인기 태그 load action
import {
  POPULAR_TAGS_LOAD_REQUEST,
  POPULAR_TAGS_LOAD_SUCCESS,
  POPULAR_TAGS_LOAD_FAILURE,
} from "store/actions/postAction";

const initialState = {
  posts: [],
  notices: [],
  popularTags: [],
  recentPosts: [],
  hasMorePosts: true,
  hasMoreRecentPosts: true,
  showPostFallback: false,
};

const PostReducer = (state = initialState, action) => {
  return immer(state, (draft) => {
    switch (action.type) {
      case POSTS_LOAD_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case POSTS_LOAD_SUCCESS: {
        draft.hasMorePosts = action.data.length === 20;
        draft.posts.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case POSTS_LOAD_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      case RECENT_POSTS_LOAD_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case RECENT_POSTS_LOAD_SUCCESS: {
        draft.hasMoreRecentPosts = action.data.length === 20;
        draft.recentPosts.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case RECENT_POSTS_LOAD_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      case NOTICE_LOAD_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case NOTICE_LOAD_SUCCESS: {
        draft.notices.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case NOTICE_LOAD_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      case POPULAR_TAGS_LOAD_REQUEST: {
        draft.showPostFallback = false;
        break;
      }
      case POPULAR_TAGS_LOAD_SUCCESS: {
        draft.popularTags.push(...action.data);
        draft.showPostFallback = true;
        break;
      }
      case POPULAR_TAGS_LOAD_FAILURE: {
        draft.showPostFallback = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};

export default PostReducer;
