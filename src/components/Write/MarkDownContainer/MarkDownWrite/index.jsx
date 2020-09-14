import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import CodeMirror from "codemirror";

import "codemirror/lib/codemirror.css";
import "./atom-one-light.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/markdown/markdown";
import "codemirror/addon/display/placeholder";

// action
import { changeMarkdown } from "store/actions/writeAction";

// style
import * as S from "./style";

const MainPane = () => {
  const dispatch = useDispatch();
  const textareaRef = useRef();
  const codeMirror = useRef();

  useEffect(() => {
    if (!textareaRef.current) return;
    codeMirror.current = CodeMirror.fromTextArea(textareaRef.current, {
      mode: "markdown",
      theme: "one-light",
      placeholder: "당신의 이야기를 적어보세요...",
      viewportMargin: Infinity,
      lineWrapping: true,
    });
    window.codeMirror = codeMirror.current;
  }, []);

  useEffect(() => {
    if (!textareaRef.current) return;
    CodeMirror.on(window.codeMirror.getDoc(), "change", (cm) => {
      dispatch(changeMarkdown(cm.getValue()));
    });
  }, [dispatch]);

  return (
    <>
      <S.Layout>
        <S.Textarea ref={textareaRef} />
      </S.Layout>
    </>
  );
};

export default MainPane;
