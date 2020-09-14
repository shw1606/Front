import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  position: relative;
  min-height: 0px;
  .CodeMirror {
    margin-top: 2rem;
    font-size: 1.3125rem;
    line-height: 1.5;
    color: black;
    .cm-header {
      line-height: 2;
    }
    .cm-header-1 {
      font-size: 2.5rem;
    }
    .cm-header-2 {
      font-size: 2rem;
    }
    .cm-header-3 {
      font-size: 1.5rem;
    }
    .cm-header-4 .cm-header-5 .cm-header-6 {
      font-size: 1.3125rem;
    }
    .CodeMirror-placeholder {
      color: gray;
      font-style: italic;
    }
  }
`;

export const Textarea = styled.textarea`
  opacity: 0;
`;
