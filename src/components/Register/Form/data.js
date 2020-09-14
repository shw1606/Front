import { changeId, changeInroduce } from "store/actions/registerAction";

const inputData = [
  {
    label: "이메일",
    placeHolder: "toby0806@naver.com",
  },
  {
    label: "아이디",
    placeHolder: "아이디를 입력하세요",
    action: changeId,
  },
  {
    label: "한 줄 소개",
    placeHolder: "당신을 한 줄로 소개해보세요",
    action: changeInroduce,
  },
];

export default inputData;
