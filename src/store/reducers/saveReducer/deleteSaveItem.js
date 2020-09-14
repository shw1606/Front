export function request(draft) {
  draft.successItemDelete = false;
}

export function success(draft, data) {
  draft.saveList = draft.saveList.filter((value) => value.id !== data);
  draft.successItemDelete = true;
}

export function failure(draft) {
  draft.successItemDelete = false;
}
