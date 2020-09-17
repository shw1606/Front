import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// action
import { uploadMarkdownImageRequest } from "store/actions/writeAction";

// style
import * as S from "./style";

const DragDropUpload = () => {
  const dispatch = useDispatch();
  const [dragging, setDragging] = useState(false);
  const down = useRef(false);
  const dragIndex = useRef(0);

  useEffect(() => {
    const onDrop = (e) => {
      e.preventDefault();
      const { files } = e.dataTransfer;
      if (!files) return;
      if (!files[0]) return;
      dispatch(uploadMarkdownImageRequest(files[0]));
      setDragging(false);
      dragIndex.current = 0;
      e.stopPropagation();
    };

    const onMouseDown = () => {
      down.current = true;
    };

    const onMouseUp = () => {
      down.current = false;
    };

    const onDragEnter = () => {
      if (down.current) return;
      dragIndex.current += 1;
      if (dragIndex.current === 1) setDragging(true);
    };

    const onDragOver = (e) => {
      e.preventDefault();
      if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "copy";
      }
      if (!dragging) setDragging(true);
    };

    const onDragLeave = () => {
      if (down.current) return;
      dragIndex.current -= 1;
      if (dragIndex.current === 0) setDragging(false);
    };

    const onMouseLeave = () => {
      if (dragging) setDragging(false);
    };

    document.addEventListener("drop", onDrop);
    document.addEventListener("dragover", onDragOver);
    document.addEventListener("dragenter", onDragEnter);
    document.addEventListener("dragleave", onDragLeave);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("drop", onDrop);
      document.removeEventListener("dragover", onDragOver);
      document.removeEventListener("dragenter", onDragEnter);
      document.removeEventListener("dragleave", onDragLeave);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [dispatch, dragging]);

  return (
    <>
      {dragging && (
        <S.Layout>
          <S.InvisibleInput type="file" />
        </S.Layout>
      )}
    </>
  );
};

export default DragDropUpload;
