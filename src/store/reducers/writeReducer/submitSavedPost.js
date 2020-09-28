export default function submitSavedPost(draft, data) {
  if (!data) return;
  draft.postId = data;
}
