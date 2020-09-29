/* eslint react/prop-types: 0 */
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import breaks from 'remark-breaks';
import { escapeForUrl } from "../../PostDetail/PostToc/utils";

const MarkdownViewer = ({ content }) => {
  useEffect(() => {
    const h1 = document.querySelectorAll('h1');
    const h2 = document.querySelectorAll('h2');
    const h3 = document.querySelectorAll('h3');

    const idList = [];

    const setId = (element) => {
      const id = escapeForUrl(element.innerHTML);
      const exists = idList.filter((existingId) => existingId.indexOf(id) !== -1);
      const uniqueId = `${id}${exists.length === 0 ? '' : `-${exists.length}`}`;
      element.id = uniqueId;
      idList.push(uniqueId);
    };

    [h1, h2, h3].forEach((elements) => elements.forEach(setId));
  }, []);

  function ThematicBreak() {
    return (
      <hr
        style={{
          border: "1px solid #dedede",
          margin: "2em 0",
        }}
      />
    );
  }

  function Paragraph({ children }) {
    return (
      <p
        style={{
          margin: "1em 0",
          lineHeight: "2em",
        }}
      >
        {children}
      </p>
    );
  }

  function Image({ src, alt }) {
    return (
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "100%",
        }}
      />
    );
  }

  function Link({ href }) {
    return (
      <a
        href={href}
        style={{
          color: "#0ca678",
        }}
      >
        {href}
      </a>
    );
  }

  function LinkReference({ href, children }) {
    return (
      <a
        href={href}
        style={{
          color: "#0ca678",
        }}
      >
        {children}
      </a>
    );
  }

  function CodeBlock({ language, value }) {
    return (
      <SyntaxHighlighter
        language={language}
        customStyle={{ backgroundColor: "#f1f3f5" }}
      >
        {value}
      </SyntaxHighlighter>
    );
  }

  function InlineCodeBlock({ value }) {
    return (
      <span
        style={{
          backgroundColor: "#f1f3f5",
          padding: "0.2em 0.4em",
        }}
      >
        {value}
      </span>
    );
  }

  function BlockQuoteBlock({ children }) {
    return (
      <div
        style={{
          margin: 0,
          paddingLeft: "2em",
          borderLeft: "0.5em solid #12b886",
        }}
      >
        {children}
      </div>
    );
  }

  function TableCellBlock({ isHeader, children, align }) {
    const style = {
      color: "#343a40",
      textAlign: align || "center",
      border: "0.7px solid #343a40",
      margin: 0,
      padding: 5,
    };

    if (isHeader) {
      style.fontWeight = "bold";
      style.borderBottom = "2px solid #343a40";
    }

    return <td style={style}>{children}</td>;
  }

  return (
    <ReactMarkdown
      source={content}
      skipHtml={false}
      escapeHtml={false}
      plugins={[breaks]}
      renderers={{
        blockquote: BlockQuoteBlock,
        tableCell: TableCellBlock,
        code: CodeBlock,
        inlineCode: InlineCodeBlock,
        link: Link,
        linkReference: LinkReference,
        image: Image,
        imageReference: Image,
        thematicBreak: ThematicBreak,
        paragraph: Paragraph,
      }}
    />
  );
};

MarkdownViewer.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MarkdownViewer;
