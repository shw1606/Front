import React from "react";
import {useSelector} from "react-redux";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import breaks from 'remark-breaks';

const PostContent = () => {
  const content = useSelector((state) => state.postDetailReducer.postInfo.context);
  return (
    <ReactMarkdown source={content}
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
                     paragraph: Paragraph
                   }}/>
  );

  function ThematicBreak() {
    return (
      <hr style={{
        border: '1px solid #dedede',
        margin: '2em 0'
      }}/>
    )
  }

  function Paragraph(props) {
    return (
      <p style={{
        margin: '1em 0',
        lineHeight: '2em'
      }}>
        {props.children}
      </p>
    );
  }

  function Image(props) {
    return (
      <img src={props.src}
           style={{
             maxWidth: '100%'
      }}/>
    )
  }

  function Link(props) {
    return (
      <a href={props.href}
         style={{
           color: '#0ca678'
      }}>
        {props.href}
      </a>
    )
  }

  function LinkReference(props) {
    return (
      <a href={props.href}
         style={{
           color: '#0ca678'
      }}>
        {props.children}
      </a>
    )
  }

  function CodeBlock(props) {
    const { language, value } = props;
    return (
      <SyntaxHighlighter language={language}>
        {value}
      </SyntaxHighlighter>
    );
  }

  function InlineCodeBlock(props) {
    const { value } = props;
    return (
      <span style={{
        backgroundColor: '#f5f2f0',
        padding: '0.2em 0.4em',
      }}>
        {value}
      </span>
    );
  }

  function BlockQuoteBlock(props) {
    return (
      <div style={{
        margin: 0,
        paddingLeft: '2em',
        borderLeft: '0.5em solid #12b886'
      }}>
        {props.children}
      </div>
    )
  }

  function TableCellBlock(props) {
    let style = {
      color: '#343a40',
      textAlign : props.align ? props.align : 'center',
      border: '0.7px solid #343a40',
      margin: 0,
      padding: 5
    };

    if(props.isHeader) {
      style.fontWeight = 'bold';
      style.borderBottom = '2px solid #343a40';
    }

    return (
      <td style={style}>
        {props.children}
      </td>
    )
  }
};

export default PostContent;