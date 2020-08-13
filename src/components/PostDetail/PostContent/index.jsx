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
                     linkReference: Link,
                     image: Image,
                     imageReference: Image,
                     listItem: ListItem,
                     thematicBreak: ThematicBreak,
                     paragraph: props => <React.Fragment {...props} />
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
      <React.Fragment>
      <div>
        {props.children}
      </div>
      </React.Fragment>
    );
  }

  function ListItem(props) {
    return (
      <li style={{
        padding: '0.2em 0',
        lineHeight: '1.6em'
      }}>
        {props.children}
      </li>
    )
  }

  function Image(props) {
    return (
      <img src={props.src} style={{
        maxWidth: '100%'
      }}/>
    )
  }

  function Root(props) {
    return (
      <div style={{
        whiteSpace: 'pre',
        padding: '0.2em 0'
      }}>
        {props.children}
      </div>
    )
  }

  function Link(props) {
    return (
      <div style={{
        color: '#0ca678'
      }}>
        {props.children}
      </div>
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