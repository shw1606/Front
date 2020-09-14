export default function (draft, data) {
  const alertIndex = draft.alertList.findIndex((value) => value.id === data);
  draft.alertList.splice(alertIndex, 1);
}
