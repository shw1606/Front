import escapeForUrl from "./escapeForUrl";

export default function parseHeadings(html) {
  const div = document.createElement('div');
  div.innerHTML = html;

  const elements = Array.from(div.children);

  const headings = elements.filter(el => el.tagName.match(/H([1-3])/));

  const idList = [];

  headings.forEach(heading => {
    const id = escapeForUrl(heading.textContent);
    const exist = idList.filter(existingId => existingId.indexOf(id) !== -1);
    const uniqueId = `${id}${exist.length === 0 ? '': `-${exist.length}`}`;
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