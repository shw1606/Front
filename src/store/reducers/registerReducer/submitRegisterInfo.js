export function request(draft, data) {
  draft.id = "";
  draft.prevId = "";
  draft.introduce = "";
  draft.prevIntroduce = "";
  draft.errorMessage = "";
}

export function success(draft, data) {}

export function failure(draft, data) {
  draft.errorMessage = data;
}
