import immer from "immer";

// actions
import {
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
} from "store/actions/postDetailAction";
import {
  SET_TOC_REQUEST,
  SET_TOC_SUCCESS,
  SET_TOC_FAILURE
} from "store/actions/postDetailAction";
import {
  LOAD_POST_DETAIL_REQUEST,
  LOAD_POST_DETAIL_SUCCESS,
  LOAD_POST_DETAIL_FAILURE,

  SUBMIT_COMMENT_REQUEST,
  SUBMIT_COMMENT_SUCCESS,
  SUBMIT_COMMENT_FAILURE,
} from "../actions/postDetailAction";

const initialState = {
  postInfo: null,
  toc: null
};

const PostReducer = (state = initialState, action) => immer(state, (draft) => {
  switch (action.type) {
    case LOAD_POST_DETAIL_REQUEST: {
      break;
    }
    case LOAD_POST_DETAIL_SUCCESS: {
      draft.postInfo = action.data;
      draft.postInfo.comments = draft.postInfo.comments.map((firstLevel) => {
        const firstId = firstLevel._id;
        firstLevel.re_comments.map((secondLevel) => {
          const secondId = secondLevel._id;
          secondLevel.re_comments.map((thirdLevel) => Object.assign(thirdLevel, {
            endPoint: true,
            parentId: secondId,
            grandParentId: firstId,
          }));
          return Object.assign(secondLevel, {
            endPoint: false,
            parentId: firstId,
            grandParentId: 0,
          });
        });
        return {
          ...firstLevel,
          endPoint: false,
          parentId: 0,
          grandParentId: 0,
        };
      });
      break;
    }
    case LOAD_POST_DETAIL_FAILURE: {
      break;
    }
    case SUBMIT_COMMENT_REQUEST: {
      break;
    }
    case SUBMIT_COMMENT_SUCCESS: {
      if (action.front.commentId) {
        if (action.front.parentId) {
          const commentIndex = draft.postInfo.comments.findIndex((post) => post._id === action.front.parentId);
          const recommentIndex = draft.postInfo.comments[
            commentIndex
          ].re_comments.findIndex((post) => post._id === action.front.commentId);
          draft.postInfo.comments[commentIndex].re_comments[
            recommentIndex
          ].re_comments.push({
            ...action.data,
            ...{
              endPoint: true,
              parentId: action.front.commentId,
              grandParentId: action.front.parentId,
            },
          });
        } else {
          const findIndex = draft.postInfo.comments.findIndex((post) => post._id === action.front.commentId);
          draft.postInfo.comments[findIndex].re_comments.push({
            ...action.data,
            ...{
              endPoint: false,
              parentId: action.front.commentId,
              grandParentId: 0,
            },
          });
        }
      } else {
        draft.postInfo.comments.push({
          ...action.data,
          endPoint: false,
          parentId: 0,
          grandParentId: 0,
        });
      }
      break;
    }
    case SUBMIT_COMMENT_FAILURE: {
      break;
    }
    case LIKE_POST_REQUEST: {
      break;
    }
    case LIKE_POST_SUCCESS: {
      console.log(draft.postInfo);
      break;
    }
    case LIKE_POST_FAILURE: {
      break;
    }
    case SET_TOC_REQUEST: {
      break;
    }
    case SET_TOC_SUCCESS: {
      draft.toc = action.data;
      break;
    }
    case SET_TOC_FAILURE: {
      break;
    }
    default: {
      break;
    }
  }
});

export default PostReducer;
