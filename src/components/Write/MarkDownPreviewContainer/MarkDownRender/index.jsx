import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import remark from "remark";
import breaks from "remark-breaks";
import htmlPlugin from "remark-html";
import prismPlugin from "./prismPlugin";

// style
import * as S from "./style";

const MarkDownRender = ({ codeTheme = "atom-one-dark" }) => {
  const [html, setHtml] = useState("");
  const title = useSelector((store) => store.write.title);
  const markdown = useSelector((store) => store.write.markdown);

  useEffect(() => {
    remark()
      .use(prismPlugin)
      .use(breaks)
      .use(htmlPlugin)
      .process(markdown, (err, file) => {
        const html = String(file);
        setHtml(html);
      });
  }, [markdown]);
  const markup = { __html: html };

  return (
    <>
      <S.TitleWrapper>{title}</S.TitleWrapper>
      <S.MarkdownWrapper
        dangerouslySetInnerHTML={markup}
        className={codeTheme}
      />
    </>
  );
};

export default MarkDownRender;
