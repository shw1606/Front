export function request(draft, data) {
  draft.markdownImage = "";
}

export function success(draft, data) {
  draft.markdownImage = data;
}
