export default function changeIntroduce(draft, data) {
  if (data === draft.prevIntroduce) {
    draft.introduce = "";
    draft.prevIntroduce = "";
  } else {
    draft.introduce = data;
    draft.prevIntroduce = data;
  }
}
