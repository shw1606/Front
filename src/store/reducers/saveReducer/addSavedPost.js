export default function (draft, data) {
  const { postId } = data;
  if (postId) {
    const included = draft.saveList.findIndex(
      (value) => value.postId === postId
    );
    draft.saveList[included] = data;
  } else {
    draft.saveList.unshift({
      ...data,
      ...{ created_at: "2020 09 12 01:21:10" },
    });
  }
}
