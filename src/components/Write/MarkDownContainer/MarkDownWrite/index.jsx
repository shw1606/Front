import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const markdown = useSelector((store) => store.write.markdown);
  const [handler, setBreak] = useState(true);

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
    if (!window.codeMirror) return;
    if (markdown === "" || handler === false) return;
    if (markdown !== "") codeMirror.current.setValue(markdown);
    setBreak(false);
  }, [handler, markdown]);

  useEffect(() => {
    if (!window.codeMirror) return;
    // if (!window.codeMirror || handler === true) return;
    CodeMirror.on(window.codeMirror.getDoc(), "change", (cm) => {
      dispatch(changeMarkdown(cm.getValue()));
    });
  }, [dispatch, handler]);

  return (
    <>
      <S.Layout>
        <S.Textarea ref={textareaRef} />
      </S.Layout>
    </>
  );
};

export default MainPane;
