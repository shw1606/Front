// 태그 추가
export function addTag(draft, data) {
  draft.tagList.push(data);
}

// 가장 뒤에 있는 태그 삭제
export function removeTag(draft) {
  draft.tagList.pop();
}

// 클릭한 태그 삭제
export function removeClickedTag(draft, data) {
  draft.tagList = draft.tagList.filter((tag) => tag !== data);
}
