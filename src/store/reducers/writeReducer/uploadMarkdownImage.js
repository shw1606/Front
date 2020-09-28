export function request(draft) {
  draft.markdownImage = "";
  draft.thumbnail = "";
}

export function success(draft, data) {
  draft.markdownImage = data;
  draft.thumbnail = data;
}
