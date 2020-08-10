import styled from "styled-components";

export const Layout = styled.div`
  margin-top: 3rem;
  color: rgb(52, 58, 64);
  h4 {
    font-size: 1.125rem;
    line-height: 1.5;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  margin-bottom: 1.5rem;
  width: 100%;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(233, 236, 239);
  border-image: initial;
  border-radius: 4px;
  overflow-y: hidden;
`;

export const CommentList = styled.div`
  margin-top: 2.5rem;
`;
