const color = {
  green: "#07bc0c",
  red: "#e74c3c",
};

const property = {
  link: {
    message: "링크가 복사되었습니다",
    color: color.green,
  },
  series: {
    message: "이미 존재하는 시리즈입니다",
    color: color.red,
  },
  saveError: {
    message: "제목 또는 내용이 비어있습니다",
    color: color.red,
  },
  save: {
    message: "포스트가 임시저장 되었습니다",
    color: color.green,
  },
};

export default function (draft, data) {
  const alertId = Math.floor(Math.random() * 1000 + 1);
  const alert = { ...property[data], ...{ id: alertId } };
  draft.alertList.push(alert);
}
