function urlSlug(string, separator = "-") {
  const regExp = string
    .replace(/\s/g, separator) // 공백을 주어진 separator로 변경
    .replace(/\./g, ""); // 마침표(.) 없애기
  return regExp;
}

export default urlSlug;
