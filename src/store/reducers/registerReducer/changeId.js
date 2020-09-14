export default function changeId(draft, data) {
  if (data === draft.prevId) {
    draft.id = "";
    draft.prevId = "";
  } else {
    draft.id = data;
    draft.prevId = data;
  }
}
