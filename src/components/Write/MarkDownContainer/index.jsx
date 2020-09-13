import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// component
import AddLink from "./AddLink";
import MainHeader from "./MainHeader";
import ToolBar from "./ToolBar";
import MarkDownWrite from "./MarkDownWrite";
import DragDropUpload from "./DragDropUpload";

// action
import { uploadMarkdownImageRequest } from "store/actions/writeAction";

// hooks
import { useUpload } from "hooks";

// style
import * as S from "./style";

const MainContainer = () => {
  const dispatch = useDispatch();
  const layoutRef = useRef();
  const markdownImage = useSelector((store) => store.write.markdownImage);
  const [image, setImage] = useUpload();
  const [addLink, setAddLink] = useState({
    top: 0,
    left: 0,
    visible: false,
    stickToRight: false,
  });

  // Link 컴포넌트에서 [확인] 버튼 클릭
  const handleConfirmAddLink = useCallback((link) => {
    setAddLink((prev) => {
      return {
        ...prev,
        visible: false,
      };
    });
    if (!window.codeMirror) return;
    const doc = window.codeMirror.getDoc();
    const cursor = doc.getCursor("end");
    const selection = doc.getSelection();
    window.codeMirror.focus();
    if (selection.length === 0) {
      doc.replaceSelection(`[링크텍스트](${link})`);
      doc.setSelection(
        {
          line: cursor.line,
          ch: cursor.ch + 1,
        },
        {
          line: cursor.line,
          ch: cursor.ch + 6,
        }
      );
      return;
    }
    doc.replaceSelection(`[${selection}](${link})`);
    doc.setSelection({
      line: cursor.line,
      ch: cursor.ch + link.length + 4,
    });
  }, []);

  // Link 컴포넌트 닫기
  const handleCancelAddLink = useCallback(() => {
    setAddLink((prev) => {
      return {
        ...prev,
        visible: false,
      };
    });
  }, []);

  // Link 컴포넌트 출력
  const handleOpenAddLink = useCallback(() => {
    const codeMirror = window.codeMirror;
    if (!codeMirror) return;

    const doc = codeMirror.getDoc();
    const cursor = doc.getCursor();
    const cursorPos = codeMirror.cursorCoords(cursor);
    const stickToRight = cursorPos.left > layoutRef.current.clientWidth - 352;
    setAddLink({
      top:
        layoutRef.current.scrollTop +
        cursorPos.top +
        codeMirror.defaultTextHeight() / 2,
      left: cursorPos.left,
      visible: true,
      stickToRight,
    });
  }, []);

  // 툴바 버튼 클릭
  const clickToolBar = useCallback(
    (mode) => {
      const codeMirror = window.codeMirror;
      if (!codeMirror) return;

      const doc = codeMirror.getDoc();

      // cursor 위치(line, ch로 return 받음)
      const cursor = doc.getCursor();

      // drag 시작, 종료 범위(line, ch로 return 받음)
      const selection = {
        start: doc.getCursor("start"),
        end: doc.getCursor("end"),
      };

      // 해당 line에 있는 text 값
      const line = doc.getLine(cursor.line);

      // heading 작성 시 띄어쓰기까지 감지
      // 해당 범위를 setSelection으로 잡음
      const selectWholeLine = () => {
        doc.setSelection(
          {
            line: cursor.line,
            ch: 0,
          },
          {
            line: cursor.line,
            ch: line.length,
          }
        );
      };

      // 기존에 있는 #을 전부 제거
      const removeHeading = (text) => {
        return text.replace(/#{1,6} /, "");
      };

      const handlers = {
        heading1: () => {
          selectWholeLine();
          const plain = removeHeading(line);
          doc.replaceSelection(`# ${plain}`);
        },
        heading2: () => {
          selectWholeLine();
          const plain = removeHeading(line);
          doc.replaceSelection(`## ${plain}`);
        },
        heading3: () => {
          selectWholeLine();
          const plain = removeHeading(line);
          doc.replaceSelection(`### ${plain}`);
        },
        bold: () => {
          // 드레그 범위에 있는 텍스트 값 가져오기
          const selected = doc.getSelection();
          if (selected === "텍스트") {
            // **텍스트**에서 텍스트만 drag 되어있는 경우(*은 무시)
            const isBold = /\*\*(.*)\*\*/.test(
              doc.getRange(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                }
              )
            );
            if (isBold) {
              // **텍스트** 전체를 범위로 잡음
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                }
              );
              // **텍스트**를 텍스트로 바꿈
              doc.replaceSelection("텍스트");
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch - 2,
                }
              );
              return;
            }
          }
          // **이 양쪽 끝에 있는 상태에서 drag 되어있는 경우
          if (/\*\*(.*)\*\*/.test(selected)) {
            doc.replaceSelection(selected.replace(/\*\*/g, ""));
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch - 4,
              }
            );
            return;
          }
          // 특정 텍스트를 drag할 경우
          if (selected.length > 0) {
            doc.replaceSelection(`**${selected}**`);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 4,
              }
            );
            return;
          }
          // 위 조건에 아무것도 해당되지 않으면 **텍스트** 출력
          doc.replaceSelection("**텍스트**");
          // drag 범위를 **텍스트**에서 텍스트만 설정해줌
          doc.setSelection(
            {
              line: cursor.line,
              ch: cursor.ch + 2,
            },
            {
              line: cursor.line,
              ch: cursor.ch + 5,
            }
          );
        },
        italic: () => {
          let selected = doc.getSelection();
          if (selected.length === 0) {
            doc.replaceSelection("_텍스트_");
            doc.setSelection(
              {
                line: cursor.line,
                ch: cursor.ch + 1,
              },
              {
                line: cursor.line,
                ch: cursor.ch + 4,
              }
            );
            return;
          }
          if (selected === "텍스트") {
            const selectLeftAndRight = doc.getRange(
              {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              }
            );
            if (/_(.*)_/.test(selectLeftAndRight)) {
              selected = selectLeftAndRight;
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                }
              );
              selection.start = {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              };
              selection.end = {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              };
            }
          }

          if (/_(.*)_/.test(selected)) {
            const plain = selected.replace(/^_/, "").replace(/_$/, "");
            doc.replaceSelection(plain);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch - 2,
              }
            );
            return;
          }
          if (selected.length > 0) {
            doc.replaceSelection(`_${selected}_`);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              }
            );
          }
        },
        strike: () => {
          let selected = doc.getSelection();

          if (selected.length === 0) {
            doc.replaceSelection("~~텍스트~~");
            doc.setSelection(
              {
                line: cursor.line,
                ch: cursor.ch + 2,
              },
              {
                line: cursor.line,
                ch: cursor.ch + 5,
              }
            );
            return;
          }
          if (selected === "텍스트") {
            const selectLeftAndRight = doc.getRange(
              {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              }
            );
            if (/~~(.*)~~/.test(selectLeftAndRight)) {
              selected = selectLeftAndRight;
              doc.setSelection(
                {
                  line: selection.start.line,
                  ch: selection.start.ch - 2,
                },
                {
                  line: selection.end.line,
                  ch: selection.end.ch + 2,
                }
              );
              selection.start = {
                line: selection.start.line,
                ch: selection.start.ch - 2,
              };
              selection.end = {
                line: selection.end.line,
                ch: selection.end.ch + 2,
              };
            }
          }

          if (/~~(.*)~~/.test(selected)) {
            const plain = selected.replace(/^~~/, "").replace(/~~$/, "");
            doc.replaceSelection(plain);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch - 4,
              }
            );
            return;
          }
          if (selected.length > 0) {
            doc.replaceSelection(`~~${selected}~~`);
            doc.setSelection(
              {
                line: selection.start.line,
                ch: selection.start.ch,
              },
              {
                line: selection.end.line,
                ch: selection.end.ch + 4,
              }
            );
          }
        },
        blockquote: () => {
          const matches = /^> /.test(line);
          doc.setSelection(
            { line: cursor.line, ch: 0 },
            { line: cursor.line, ch: line.length }
          );
          if (matches) {
            doc.replaceSelection(line.replace(/^> /, ""));
            doc.setCursor({
              line: cursor.line,
              ch: cursor.ch - 2,
            });
          } else {
            doc.replaceSelection(`> ${line}`);
            doc.setCursor({
              line: cursor.line,
              ch: cursor.ch + 2,
            });
          }
        },
        link: () => {
          handleOpenAddLink();
        },
        upload: () => {
          setImage();
        },
        codeblock: () => {
          const selected = doc.getSelection();
          if (selected.length === 0) {
            doc.replaceSelection("```\n코드를 입력하세요\n```");
            doc.setSelection(
              {
                line: cursor.line + 1,
                ch: 0,
              },
              {
                line: cursor.line + 1,
                ch: 9,
              }
            );
            return;
          }
          doc.replaceSelection("```\n" + selected + "\n```");
        },
      };
      const handler = handlers[mode];
      if (!handler) return;
      handler();
      codeMirror.focus();
    },
    [handleOpenAddLink, setImage]
  );

  useEffect(() => {
    if (!image) return;
    dispatch(uploadMarkdownImageRequest(image));
  }, [dispatch, image]);

  useEffect(() => {
    const codeMirror = window.codeMirror;
    if (!markdownImage || !codeMirror) return;
    codeMirror.getDoc().replaceSelection(`![](${encodeURI(markdownImage)})`);
  }, [markdownImage, image]);

  return (
    <>
      <S.Layout ref={layoutRef}>
        <MainHeader />
        <ToolBar onclick={clickToolBar} />
        <MarkDownWrite />
        {addLink.visible && (
          <AddLink
            left={addLink.left}
            top={addLink.top}
            stickToRight={addLink.stickToRight}
            onConfirm={handleConfirmAddLink}
            onCancel={handleCancelAddLink}
          />
        )}
      </S.Layout>
      <DragDropUpload />
    </>
  );
};

export default MainContainer;
