import React from "react";
import {useSelector} from "react-redux";
import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const PostContent = () => {
  const post = useSelector((state) => state.postDetailReducer.postInfo);

  return (
    <ReactMarkdown source={post.context}
                   renderers={{
                     blockquote: BlockQuoteBlock,
                     tableCell: TableCellBlock,
                     code: CodeBlock
                   }}
    />
  );

  function BlockQuoteBlock(props) {
    return (
      <div style={{
        color: '#666',
        margin: 0,
        paddingLeft: '2em',
        borderLeft: '0.3em solid #eee'
      }}>
        {props.children}
      </div>
    )
  }

  function TableCellBlock(props) {
    let style = {
      textAlign : props.align ? props.align : 'center',
      border: '1.5px solid #eee',
      margin: 0,
      padding: 5
    };

    if(props.isHeader) {
      style.fontWeight = 'bold'
    }

    return (
      <td style={style}>
        {props.children}
      </td>
    )
  }
};

export default PostContent;
