export function request(draft) {
  draft.postId = "";
  draft.title = "";
  draft.tagList = "";
  draft.markdown = "";
}

export function success(draft, data) {
  draft.postId = data.postId;
  draft.title = data.title;
  draft.tagList = data.tagList;
  draft.markdown = data.content;
}
