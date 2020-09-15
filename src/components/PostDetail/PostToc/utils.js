export function escapeForUrl (text) {
  return text
    .replace(
      /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf -]/g,
      '',
    )
    .trim()
    .replace(/ /g, '-')
    .replace(/--+/g, '-');
}

export function parseHeadings(html) {
  const div = document.createElement('div');
  div.innerHTML = html;

  const elements = Array.from(div.children);

  const headings = elements.filter(el => el.tagName.match(/H([1-3])/));

  const idList = [];

  headings.forEach(element => {
    const id = escapeForUrl(element.textContent);
    const exist = idList.filter(existingId => existingId.indexOf(id) !== -1);
    const uniqueId = `${id}${exist.length === 0 ? '': `-${exist.length}`}`;
    element.id = uniqueId;
    idList.push(uniqueId);
  });

  const headingsInfo = headings.map((heading, index) => ({
    id: idList[index],
    text: heading.textContent,
    level: parseInt(heading.tagName.replace('H', ''), 10)
  }));

  const minLevel = Math.min(
    ...Array.from(headingsInfo.map(info => info.level))
  );

  headingsInfo.forEach(info => {
    info.level -= minLevel;
  });

  return headingsInfo;
}

export function getScrollTop() {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
}

