export default function (draft, data) {
  if (data) {
    draft.printWriteSetting = true;
  } else {
    draft.printWriteSetting = false;
  }
}
